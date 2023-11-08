import { expect, test } from '@playwright/test';

test.skip('has a title element', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
