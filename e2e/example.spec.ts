import { test, expect } from '@playwright/test';

test('homepage visual regression', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveScreenshot(`homepage.png`, {
    maxDiffPixels: 100,
    animations: 'disabled',
    fullPage: true,
  });
});
