import { test, expect } from '@playwright/test';

/**
 * Navigation Test Suite - Desktop
 * 
 * Fast tests to verify navigation scrolls to correct positions.
 * Run with: npm run test:headed (visible browser)
 * Run with: npm run test:slow (slow motion for debugging)
 */

// Menu items and expected visible content
const NAV_ITEMS = [
  { label: 'Home', targetId: 'hero', expectedText: 'Empowering AWS' },
  { label: 'AWS User Groups', targetId: 'user-groups', expectedText: 'Discover AWS User Groups' },
  { label: 'Featured AWS UG', targetId: 'featured', expectedText: 'Featured AWS Usergroup' },
  { label: 'Build Genie', targetId: 'build', expectedText: 'Build Genie Cloud Solution' },
  { label: 'Leaders Insights', targetId: 'insights', expectedText: 'AWS User Group Leaders' },
  { label: 'Resources for Leaders', targetId: 'resources', expectedText: 'These resources are here to help' },
];

// Header is approximately 80px tall
const HEADER_HEIGHT = 80;

test.describe('Desktop Navigation', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    // Wait for loader to disappear
    await page.waitForSelector('#app-loader', { state: 'hidden', timeout: 5000 }).catch(() => {});
    await page.waitForTimeout(500);
  });

  test('All navigation items scroll correctly', async ({ page }) => {
    console.log('\n📊 NAVIGATION TEST\n');
    
    let allPassed = true;
    
    for (const navItem of NAV_ITEMS) {
      // Click nav link
      await page.locator(`nav a[href="#${navItem.targetId}"]`).first().click();
      await page.waitForTimeout(400);
      
      // Find expected text
      const textElement = page.locator(`text=${navItem.expectedText}`).first();
      const isVisible = await textElement.isVisible().catch(() => false);
      const box = isVisible ? await textElement.boundingBox() : null;
      const textY = box?.y ?? -1;
      
      // Text should be visible and below header (with 20px tolerance)
      const passed = isVisible && textY > (HEADER_HEIGHT - 20);
      if (!passed) allPassed = false;
      
      console.log(`${passed ? '✅' : '❌'} ${navItem.label.padEnd(22)} → Y: ${textY.toFixed(0)}px`);
      
      // Screenshot
      await page.screenshot({ path: `./tests/screenshots/${navItem.targetId}.png` });
    }
    
    console.log('\n' + (allPassed ? '✅ All sections positioned correctly!' : '❌ Some sections need adjustment'));
    expect(allPassed).toBe(true);
  });

  test('Logo scrolls to top', async ({ page }) => {
    // Scroll down first
    await page.locator('nav a[href="#resources"]').first().click();
    await page.waitForTimeout(600);
    
    const scrollBefore = await page.evaluate(() => window.scrollY);
    console.log(`\n🏠 Before: ${scrollBefore}px`);
    
    // Click logo image directly
    const logo = page.locator('header a img[alt="AWS Global"]');
    await logo.click();
    await page.waitForTimeout(800);
    
    const scrollAfter = await page.evaluate(() => window.scrollY);
    console.log(`🏠 After:  ${scrollAfter}px`);
    
    await page.screenshot({ path: './tests/screenshots/logo-home.png' });
    
    // Should scroll to top (near 0)
    expect(scrollAfter).toBeLessThan(scrollBefore);
    expect(scrollAfter).toBeLessThan(300);
  });
});

test.describe('Visual Screenshots', () => {
  test('Capture all sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(800);
    
    console.log('\n📸 Capturing screenshots...\n');
    
    for (const navItem of NAV_ITEMS) {
      await page.locator(`nav a[href="#${navItem.targetId}"]`).first().click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: `./tests/screenshots/visual-${navItem.targetId}.png` });
      console.log(`  📷 ${navItem.label}`);
    }
    
    console.log('\n✅ Screenshots saved to tests/screenshots/');
  });
});
