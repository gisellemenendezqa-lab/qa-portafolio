const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('standard_user puede iniciar sesión', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.abrir();
  await loginPage.iniciarSesion('standard_user', 'secret_sauce');
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('login con contraseña incorrecta muestra error', async ({ page }) => {
 const loginPage = new LoginPage(page);
  await loginPage.abrir();
  await loginPage.iniciarSesion('standard_user', 'clave_mala');

  await expect(loginPage.mensajeError).toContainText('Epic sadface: Username and password do not match any user in this service');
});