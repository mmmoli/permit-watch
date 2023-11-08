import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('Headline is visible', async ({ page }) => {
	await expect(page.getByTestId('home-headline')).toBeVisible();
});
