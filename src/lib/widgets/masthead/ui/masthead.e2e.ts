import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('Displays the tagline', async ({ page }) => {
	await expect(page.getByTestId('masthead-tagline')).toBeVisible();
});

test('Displays the brand', async ({ page }) => {
	await expect(page.getByTestId('masthead-brand')).toBeVisible();
});
