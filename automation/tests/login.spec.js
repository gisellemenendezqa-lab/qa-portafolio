const { test, expect } = require('@playwright/test');

test('standard_user puede iniciar sesión', async ({ page }) => {
  // Acciones
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verificación
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});