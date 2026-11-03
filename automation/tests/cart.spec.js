const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('standard_user puede eliminar', async ({ page }) => {
  // Acción: añadir Sauce Labs Backpack
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verificación: el boton cambia a Remove
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toHaveText('Remove');
});


test('standard_user puede añadir un producto al carrito', async ({ page }) => {
  // Acción: añadir Sauce Labs Backpack
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Verificación: el carrito muestra 1
  await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('1');
});

test('standard_user puede quitar un producto del carrito', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');   // antes: se ve el 1
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible(); // después: ya no se ve
});