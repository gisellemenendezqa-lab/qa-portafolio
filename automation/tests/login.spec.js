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

test('login con contraseña incorrecta muestra error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('clave_mala');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});