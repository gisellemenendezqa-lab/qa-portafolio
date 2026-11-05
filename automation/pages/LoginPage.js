class LoginPage {
  constructor(page) {
    this.page = page;
    this.usuario = page.locator('[data-test="username"]');
    this.clave = page.locator('[data-test="password"]');
    this.botonLogin = page.locator('[data-test="login-button"]');
    this.mensajeError = page.locator('[data-test="error"]');
  }

  async abrir() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async iniciarSesion(usuario, clave) {
    await this.usuario.fill(usuario);
    await this.clave.fill(clave);
    await this.botonLogin.click();
  }
}

module.exports = { LoginPage };