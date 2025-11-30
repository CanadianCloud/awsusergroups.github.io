/**
 * AWS User Groups Data Enhancer
 * 
 * This script enhances the userGroups.json data by:
 * 1. Reverse geocoding coordinates to get country names
 * 2. Searching for missing URLs on Meetup/LinkedIn
 * 3. Applying manual corrections
 * 
 * Usage: node scripts/enhanceUserGroups.cjs
 */

const fs = require('fs');
const path = require('path');

// Rate limiting for APIs
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Paths
const dataFile = path.join(__dirname, '..', 'src', 'data', 'userGroups.json');
const correctionsFile = path.join(__dirname, 'manual-corrections.json');
const reverseGeocodeCache = path.join(__dirname, 'reverse-geocode-cache.json');
const urlSearchCache = path.join(__dirname, 'url-search-cache.json');

// Load caches
function loadCache(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return new Map(Object.entries(JSON.parse(fs.readFileSync(filePath, 'utf8'))));
    }
  } catch (e) {
    console.log(`  Starting with fresh cache: ${path.basename(filePath)}`);
  }
  return new Map();
}

function saveCache(cache, filePath) {
  fs.writeFileSync(filePath, JSON.stringify(Object.fromEntries(cache), null, 2));
}

const geoCache = loadCache(reverseGeocodeCache);
const urlCache = loadCache(urlSearchCache);

/**
 * Reverse geocode coordinates to get country
 */
async function reverseGeocode(lat, lng, retries = 3) {
  const cacheKey = `${lat.toFixed(4)},${lng.toFixed(4)}`;
  
  if (geoCache.has(cacheKey)) {
    return geoCache.get(cacheKey);
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await sleep(1100); // Respect Nominatim rate limit
      
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=3`;
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'AWSUserGroupsMap/1.0 (https://github.com/CanadianCloud/awsusergroups.github.io)'
        },
        signal: AbortSignal.timeout(10000)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.address) {
        const country = data.address.country || '';
        geoCache.set(cacheKey, country);
        saveCache(geoCache, reverseGeocodeCache);
        return country;
      }
      
      geoCache.set(cacheKey, null);
      saveCache(geoCache, reverseGeocodeCache);
      return null;
      
    } catch (error) {
      console.warn(`  ⚠ Attempt ${attempt}/${retries} failed: ${error.message}`);
      if (attempt < retries) {
        await sleep(2000 * attempt);
      }
    }
  }
  
  return null;
}

/**
 * Search for a Meetup group URL
 */
async function searchMeetupUrl(groupName, city, retries = 2) {
  const cacheKey = groupName.toLowerCase();
  
  if (urlCache.has(cacheKey)) {
    return urlCache.get(cacheKey);
  }

  // Generate potential Meetup URL patterns
  const citySlug = city.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  const potentialUrls = [
    `https://www.meetup.com/aws-user-group-${citySlug}/`,
    `https://www.meetup.com/aws-${citySlug}/`,
    `https://www.meetup.com/awsug-${citySlug}/`,
    `https://www.meetup.com/aws-${citySlug}-user-group/`,
    `https://www.meetup.com/${citySlug}-aws-user-group/`
  ];

  for (const testUrl of potentialUrls) {
    try {
      await sleep(500);
      
      const response = await fetch(testUrl, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        console.log(`  ✓ Found URL: ${testUrl}`);
        urlCache.set(cacheKey, testUrl);
        saveCache(urlCache, urlSearchCache);
        return testUrl;
      }
    } catch (error) {
      // URL doesn't exist, try next
    }
  }
  
  // Mark as searched but not found
  urlCache.set(cacheKey, '');
  saveCache(urlCache, urlSearchCache);
  return '';
}

/**
 * Main enhancement function
 */
async function enhanceUserGroups() {
  console.log('🚀 AWS User Groups Data Enhancer\n');
  
  // Load data
  console.log('📂 Loading data files...');
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  let corrections = { urlOverrides: {}, cityCorrections: {}, excludeGroups: [] };
  
  try {
    corrections = JSON.parse(fs.readFileSync(correctionsFile, 'utf8'));
    console.log('  ✓ Loaded manual corrections');
  } catch (e) {
    console.log('  ⚠ No manual corrections file found');
  }
  
  const groups = data.userGroups;
  console.log(`  ✓ Loaded ${groups.length} user groups\n`);
  
  // Stats
  let countriesFixed = 0;
  let urlsFixed = 0;
  let citiesFixed = 0;
  let excluded = 0;
  
  // Filter excluded groups
  const filteredGroups = groups.filter(g => {
    if (corrections.excludeGroups?.includes(g.name)) {
      excluded++;
      return false;
    }
    return true;
  });
  
  console.log(`🗑️  Excluded ${excluded} invalid groups\n`);
  
  // Process each group
  console.log('🌍 Phase 1: Fixing countries via reverse geocoding...\n');
  
  let processed = 0;
  for (const group of filteredGroups) {
    processed++;
    
    // Apply manual city/country corrections first
    if (corrections.cityCorrections?.[group.name]) {
      const correction = corrections.cityCorrections[group.name];
      if (correction.city) {
        group.city = correction.city;
        citiesFixed++;
      }
      if (correction.country) {
        group.country = correction.country;
        countriesFixed++;
        console.log(`[${processed}/${filteredGroups.length}] ${group.name} -> Manual: ${correction.country}`);
        continue;
      }
    }
    
    // Reverse geocode for country if missing
    if (!group.country && group.lat && group.lng) {
      console.log(`[${processed}/${filteredGroups.length}] ${group.name}`);
      const country = await reverseGeocode(group.lat, group.lng);
      if (country) {
        group.country = country;
        countriesFixed++;
        console.log(`  ✓ Country: ${country}`);
      } else {
        console.log(`  ✗ Could not determine country`);
      }
    }
    
    // Progress save every 50 groups
    if (processed % 50 === 0) {
      const tempOutput = {
        ...data,
        userGroups: filteredGroups,
        lastUpdated: new Date().toISOString()
      };
      fs.writeFileSync(dataFile, JSON.stringify(tempOutput, null, 2));
      console.log(`\n  💾 Progress saved (${processed}/${filteredGroups.length})\n`);
    }
  }
  
  console.log(`\n✅ Phase 1 complete: Fixed ${countriesFixed} countries\n`);
  
  // Phase 2: Find missing URLs
  console.log('🔗 Phase 2: Searching for missing URLs...\n');
  
  processed = 0;
  const groupsWithoutUrl = filteredGroups.filter(g => !g.url);
  
  for (const group of groupsWithoutUrl) {
    processed++;
    
    // Apply manual URL overrides first
    if (corrections.urlOverrides?.[group.name]) {
      group.url = corrections.urlOverrides[group.name];
      urlsFixed++;
      console.log(`[${processed}/${groupsWithoutUrl.length}] ${group.name} -> Manual URL`);
      continue;
    }
    
    // Search for Meetup URL
    console.log(`[${processed}/${groupsWithoutUrl.length}] Searching: ${group.name}`);
    const foundUrl = await searchMeetupUrl(group.name, group.city);
    if (foundUrl) {
      group.url = foundUrl;
      urlsFixed++;
    }
  }
  
  console.log(`\n✅ Phase 2 complete: Fixed ${urlsFixed} URLs\n`);
  
  // Save final results
  const output = {
    lastUpdated: new Date().toISOString(),
    source: data.source,
    totalGroups: filteredGroups.length,
    userGroups: filteredGroups
  };
  
  fs.writeFileSync(dataFile, JSON.stringify(output, null, 2));
  
  // Print summary
  const withCountry = filteredGroups.filter(g => g.country).length;
  const withUrl = filteredGroups.filter(g => g.url).length;
  const withCoords = filteredGroups.filter(g => g.lat && g.lng).length;
  
  console.log('═══════════════════════════════════════════');
  console.log('📈 ENHANCEMENT SUMMARY');
  console.log('═══════════════════════════════════════════');
  console.log(`   Total groups: ${filteredGroups.length}`);
  console.log(`   With coordinates: ${withCoords} (${(withCoords/filteredGroups.length*100).toFixed(1)}%)`);
  console.log(`   With country: ${withCountry} (${(withCountry/filteredGroups.length*100).toFixed(1)}%)`);
  console.log(`   With URL: ${withUrl} (${(withUrl/filteredGroups.length*100).toFixed(1)}%)`);
  console.log('───────────────────────────────────────────');
  console.log(`   Countries fixed this run: ${countriesFixed}`);
  console.log(`   URLs fixed this run: ${urlsFixed}`);
  console.log(`   Cities corrected: ${citiesFixed}`);
  console.log(`   Groups excluded: ${excluded}`);
  console.log('═══════════════════════════════════════════\n');
  
  // List remaining groups without URLs
  const stillMissingUrl = filteredGroups.filter(g => !g.url);
  if (stillMissingUrl.length > 0 && stillMissingUrl.length <= 50) {
    console.log('⚠️  Groups still missing URLs:');
    stillMissingUrl.forEach(g => console.log(`   - ${g.name} (${g.city}, ${g.country || 'Unknown'})`));
    console.log('\n   Add these to scripts/manual-corrections.json to fix manually.\n');
  } else if (stillMissingUrl.length > 50) {
    console.log(`⚠️  ${stillMissingUrl.length} groups still missing URLs.`);
    console.log('   Run with --list-missing to see all.\n');
  }
}

// Run the enhancer
enhanceUserGroups().catch(console.error);
