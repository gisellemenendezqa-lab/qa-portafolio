const { test, expect } = require('@playwright/test');

test('usuario bloqueado', async ({ page }) => {
  // Acciones
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
// Verificación
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
});

test('sin usuario', async ({ page }) => {
  // Acciones
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
// Verificación
 await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});

