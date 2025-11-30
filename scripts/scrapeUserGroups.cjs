/**
 * AWS User Groups Scraper
 * 
 * This script scrapes AWS User Groups from builder.aws.com and generates
 * a JSON file with coordinates for mapping.
 * 
 * Usage: node scripts/scrapeUserGroups.cjs
 * 
 * Dependencies: playwright
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Rate limiting for Nominatim API (max 1 request per second)
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Cache for geocoding results to avoid duplicate API calls
const geocodeCacheFile = path.join(__dirname, 'geocode-cache.json');

function loadGeocodeCache() {
  try {
    if (fs.existsSync(geocodeCacheFile)) {
      const data = JSON.parse(fs.readFileSync(geocodeCacheFile, 'utf8'));
      return new Map(Object.entries(data));
    }
  } catch (e) {
    console.log('  Starting with fresh geocode cache');
  }
  return new Map();
}

function saveGeocodeCache(cache) {
  const obj = Object.fromEntries(cache);
  fs.writeFileSync(geocodeCacheFile, JSON.stringify(obj, null, 2));
}

const geocodeCache = loadGeocodeCache();

/**
 * Geocode a location using Nominatim (OpenStreetMap) - Free, no API key needed
 * With retry logic for network errors
 */
async function geocodeLocation(city, country, retries = 3) {
  const cacheKey = `${city}, ${country}`.toLowerCase();
  
  if (geocodeCache.has(cacheKey)) {
    const cached = geocodeCache.get(cacheKey);
    if (cached) {
      console.log(`  ✓ Cached: ${city}, ${country} -> ${cached.lat}, ${cached.lng}`);
    }
    return cached;
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Respect Nominatim's rate limit (1 request per second)
      await sleep(1200);
      
      const query = encodeURIComponent(`${city}, ${country}`);
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`;
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'AWSUserGroupsMap/1.0 (https://github.com/CanadianCloud/awsusergroups.github.io)'
        },
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const result = {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon)
        };
        geocodeCache.set(cacheKey, result);
        saveGeocodeCache(geocodeCache);
        console.log(`  ✓ Geocoded: ${city}, ${country} -> ${result.lat}, ${result.lng}`);
        return result;
      }
      
      // No results found - cache as null to avoid retrying
      geocodeCache.set(cacheKey, null);
      saveGeocodeCache(geocodeCache);
      console.warn(`  ✗ No results for: ${city}, ${country}`);
      return null;
      
    } catch (error) {
      console.warn(`  ⚠ Attempt ${attempt}/${retries} failed for ${city}, ${country}: ${error.message}`);
      if (attempt < retries) {
        await sleep(2000 * attempt); // Exponential backoff
      }
    }
  }
  
  console.error(`  ✗ Failed after ${retries} attempts: ${city}, ${country}`);
  return null;
}

/**
 * Parse location string into city and country
 * Format: "City, Country" or "City, State, Country"
 */
function parseLocation(locationStr) {
  if (!locationStr) return { city: '', country: '' };
  
  const parts = locationStr.split(',').map(s => s.trim());
  
  if (parts.length >= 2) {
    return {
      city: parts[0],
      country: parts[parts.length - 1]
    };
  }
  
  return {
    city: parts[0] || '',
    country: ''
  };
}

/**
 * Main scraping function
 */
async function scrapeAWSUserGroups() {
  console.log('🚀 Starting AWS User Groups scraper...\n');
  
  const browser = await chromium.launch({ 
    headless: true 
  });
  
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  try {
    console.log('📡 Navigating to AWS User Groups page...');
    await page.goto('https://builder.aws.com/community/user-groups', {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    
    // Wait for the page to load
    console.log('⏳ Waiting for content to load...');
    await page.waitForTimeout(5000);
    
    // Scroll to the directory section (anchor #directory)
    console.log('📜 Scrolling to user groups directory...');
    await page.evaluate(() => {
      const directorySection = document.querySelector('#directory') || 
        document.querySelector('[id*="directory"]') ||
        document.querySelector('h2, h3');
      if (directorySection) {
        directorySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    await page.waitForTimeout(2000);
    
    // Load all user groups by scrolling continuously
    console.log('📜 Loading all user groups (scrolling)...');
    let previousHeight = 0;
    let scrollAttempts = 0;
    const maxScrollAttempts = 100; // Increased for ~590+ groups
    
    while (scrollAttempts < maxScrollAttempts) {
      const currentHeight = await page.evaluate(() => document.body.scrollHeight);
      
      if (currentHeight === previousHeight) {
        // Try one more scroll and wait
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(2000);
        const finalHeight = await page.evaluate(() => document.body.scrollHeight);
        if (finalHeight === currentHeight) {
          break; // No more content loading
        }
      }
      
      previousHeight = currentHeight;
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1000);
      scrollAttempts++;
      
      if (scrollAttempts % 10 === 0) {
        const count = await page.$$eval('a[href*="Join"]', els => els.length);
        console.log(`  Scrolled ${scrollAttempts}x, found ~${count} groups so far...`);
      }
    }
    
    console.log('\n🔍 Extracting user group data...');
    
    // Based on the screenshot structure:
    // - Each user group row has: Name (e.g., "AWS User Group Tiranë")
    // - Location below with pin icon (e.g., "Tiranë, Albania")  
    // - "Join" link on the right
    const userGroups = await page.evaluate(() => {
      const groups = [];
      const processedNames = new Set();
      
      // Get all text from the page and parse it line by line
      // The pattern is: GroupName \n Location \n Join (repeating)
      const bodyText = document.body.innerText;
      const lines = bodyText.split('\n').map(l => l.trim()).filter(l => l);
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this line is an AWS User Group name
        if ((line.startsWith('AWS User Group') || line.startsWith('AWS UG')) && 
            line.length < 100 && 
            !processedNames.has(line)) {
          
          processedNames.add(line);
          
          // The next line should be the location (City, Country format)
          let location = '';
          if (i + 1 < lines.length) {
            const nextLine = lines[i + 1];
            // Location should contain a comma and not be "Join"
            if (nextLine.includes(',') && !nextLine.includes('Join') && !nextLine.startsWith('AWS')) {
              location = nextLine;
            }
          }
          
          groups.push({
            name: line,
            location: location,
            url: '' // Will try to find URLs separately
          });
        }
      }
      
      // Now try to match URLs by looking at anchor tags
      const links = document.querySelectorAll('a[href*="meetup"], a[href*="linkedin"]');
      links.forEach(link => {
        const href = link.href;
        const text = link.closest('[class]')?.innerText || '';
        
        // Try to match this link to a group
        for (const group of groups) {
          if (text.includes(group.name) || 
              href.toLowerCase().includes(group.name.toLowerCase().replace(/\s+/g, '-').replace('aws-user-group-', ''))) {
            if (!group.url) {
              group.url = href;
            }
            break;
          }
        }
      });
      
      return groups;
    });
    
    console.log(`\n📊 Found ${userGroups.length} raw entries`);
    
    // Take a debug screenshot
    await page.screenshot({ 
      path: path.join(__dirname, 'debug-screenshot.png'),
      fullPage: true 
    });
    console.log('  Debug screenshot saved');
    
    if (userGroups.length === 0) {
      console.log('\n⚠️  No user groups found. Check debug-screenshot.png');
      const html = await page.content();
      fs.writeFileSync(path.join(__dirname, 'debug-page.html'), html);
      console.log('  Page HTML saved to debug-page.html');
      await browser.close();
      return;
    }
    
    // Filter out non-user-group entries and clean up data
    const filteredGroups = userGroups.filter(g => {
      // Skip page headers, navigation items, etc.
      const skipPatterns = [
        'AWS User Groups | Community',
        'AWS User Groups\n',
        'AWS User Group\n'
      ];
      return !skipPatterns.some(p => g.name.includes(p)) && 
             g.name.length > 10 && 
             g.name.length < 80;
    });
    
    console.log(`📋 Filtered to ${filteredGroups.length} valid user groups`);
    
    // Geocode locations
    console.log('\n🌍 Geocoding locations (this may take a while due to rate limits)...');
    console.log('   Progress is cached - you can restart if interrupted.\n');
    
    const enrichedGroups = [];
    let processed = 0;
    
    for (const group of filteredGroups) {
      processed++;
      
      // First try to get location from the extracted location field
      let { city, country } = parseLocation(group.location);
      
      // If no location found, try to extract from group name
      if (!city && !country) {
        // Extract city name from "AWS User Group <CityName>" pattern
        let locationFromName = group.name
          .replace(/^AWS User Group\s*/i, '')
          .replace(/^AWS UG\s*/i, '')
          .replace(/\s*-\s*.*$/, '') // Remove suffixes like "- AWS Builders LA"
          .trim();
        
        if (locationFromName) {
          city = locationFromName;
        }
      }
      
      console.log(`[${processed}/${filteredGroups.length}] ${group.name}`);
      
      let coords = null;
      if (city && country) {
        coords = await geocodeLocation(city, country);
      } else if (city) {
        // Try geocoding with just the city name
        coords = await geocodeLocation(city, '');
      }
      
      enrichedGroups.push({
        name: group.name,
        city: city,
        country: country,
        lat: coords?.lat || null,
        lng: coords?.lng || null,
        url: group.url
      });
      
      // Save progress periodically
      if (processed % 50 === 0) {
        const tempOutput = {
          lastUpdated: new Date().toISOString(),
          source: 'https://builder.aws.com/community/user-groups',
          totalGroups: enrichedGroups.length,
          userGroups: enrichedGroups
        };
        fs.writeFileSync(
          path.join(__dirname, '..', 'src', 'data', 'userGroups.json'),
          JSON.stringify(tempOutput, null, 2)
        );
        console.log(`\n  💾 Progress saved (${processed}/${filteredGroups.length})\n`);
      }
    }
    
    // Save final results
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'userGroups.json');
    const outputDir = path.dirname(outputPath);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const output = {
      lastUpdated: new Date().toISOString(),
      source: 'https://builder.aws.com/community/user-groups',
      totalGroups: enrichedGroups.length,
      userGroups: enrichedGroups
    };
    
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`\n✅ Saved ${enrichedGroups.length} user groups to src/data/userGroups.json`);
    
    // Print summary
    const withCoords = enrichedGroups.filter(g => g.lat && g.lng).length;
    console.log(`\n📈 Summary:`);
    console.log(`   Total groups: ${enrichedGroups.length}`);
    console.log(`   With coordinates: ${withCoords}`);
    console.log(`   Without coordinates: ${enrichedGroups.length - withCoords}`);
    
  } catch (error) {
    console.error('❌ Error:', error);
    
    try {
      await page.screenshot({ 
        path: path.join(__dirname, 'error-screenshot.png'),
        fullPage: true 
      });
      console.log('  Error screenshot saved');
    } catch (e) {
      // Ignore
    }
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeAWSUserGroups().catch(console.error);
