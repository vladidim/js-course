import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.youniqueresearch.com/');
  await expect(page.getByRole('heading', { name: 'Take a look around at our new YOUnique website!' })).toBeVisible();

  await page.getByRole('link', { name: 'Research' }).click();
  await expect(page.getByRole('heading', { name: 'Research: Oneness by Celebrating Diversity' })).toBeVisible();

  await page.getByRole('link', { name: 'News' }).click();
  await expect(page.getByRole('heading', { name: 'News: Oneness by Celebrating Diversity' })).toBeVisible();

  await page.getByRole('link', { name: 'Peers' }).click();
  await expect(page.getByRole('heading', { name: 'Peers Directory: Oneness by Celebrating Diversity' })).toBeVisible();
 
  await page.getByRole('link', { name: 'Participants' }).click();
  await expect(page.getByRole('heading', { name: 'Participants: Oneness by Celebrating Diversity' })).toBeVisible();
 
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('E-mail is required!').click();
  await page.getByText('Password is required!').click();

  // await expect(page.getByTestId('email-error'; { name: 'E-mail is required!' })).toBeVisible();

  // await expect(page).toThrowError(/Password is required!/);
  // getByText('E-mail is required!')
  // getByText('Password is required!')
})