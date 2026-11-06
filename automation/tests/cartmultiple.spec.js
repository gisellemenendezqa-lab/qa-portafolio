const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test('el carrito muestra los dos productos que añadí', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.abrir();
  await loginPage.iniciarSesion('standard_user', 'secret_sauce');
  await inventoryPage.anadirProducto('sauce-labs-backpack');
  await inventoryPage.anadirProducto('sauce-labs-bike-light');
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(cartPage.titulo).toHaveText('Your Cart');
  await expect(cartPage.nombreProducto).toHaveCount(2);
  await expect(cartPage.nombreProducto).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);

  await cartPage.irACheckout();
  await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');
});