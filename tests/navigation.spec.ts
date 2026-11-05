import { test, expect } from '@playwright/test';

test('Main navigation reaches each leader section', async ({ page }) => {
  await page.goto('/');
  const navigation = page.getByRole('navigation', { name: 'Main navigation' });
  for (const [name, id] of [['Find a Group', 'user-groups'], ['Leader Resources', 'resources'], ['Community Tools', 'build'], ['Leader Insights', 'insights']]) {
    await navigation.getByRole('link', { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp('#' + id + '$'));
    await expect(page.locator('#' + id).getByRole('heading').first()).toBeInViewport();
  }
  await page.getByRole('link', { name: 'AWS User Groups home', exact: true }).first().click();
  await expect(page.getByRole('heading', { level: 1 })).toBeInViewport();
});

test('Directory supports search, empty results, country filtering, and pagination', async ({ page }) => {
  await page.goto('/#user-groups');
  const search = page.getByRole('searchbox');
  await search.fill('Vancouver');
  await expect(page.getByRole('status')).toHaveText('1 group in this directory matching your search');
  await expect(page.locator('.group-list')).toContainText('AWS User Group Vancouver');
  await expect(page.locator('.group-row')).toHaveAttribute('href', 'https://awscanada.ca/');
  await search.fill('zzzznoresult');
  await expect(page.getByText('No groups found for that search.')).toBeVisible();
  await page.getByRole('button', { name: 'Clear filters' }).click();
  await expect(search).toHaveValue('');
  await page.getByRole('combobox', { name: 'Filter by country' }).selectOption('Australia');
  const firstPage = await page.locator('.group-list').innerText();
  await page.getByRole('button', { name: 'Next groups', exact: true }).click();
  await expect(page.locator('.pagination')).toContainText('Page 2 of 2');
  expect(await page.locator('.group-list').innerText()).not.toBe(firstPage);
  await expect(page.getByRole('button', { name: 'Next groups', exact: true })).toBeDisabled();
  await page.getByRole('button', { name: 'Hide map' }).click();
  await expect(page.locator('#community-map')).toHaveCount(0);
  await page.getByRole('button', { name: 'Show map' }).click();
  await expect(page.locator('#community-map .leaflet-container')).toBeVisible();
});

test('Leader advice can be opened with the keyboard', async ({ page }) => {
  await page.goto('/#insights');
  const question = page.locator('.insight summary').first();
  await question.focus();
  await question.press('Enter');
  await expect(page.locator('.insight[open] .insight-answer')).toContainText('Consistency is key');
  await question.press('Enter');
  await expect(page.locator('.insight[open]')).toHaveCount(0);
});

test('Mobile menu closes on navigation without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Leader Resources', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#resources h2')).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
