class InventoryPage {
  constructor(page) {
    this.page = page;
    this.titulo = page.locator('[data-test="title"]');
    this.contadorCarrito = page.locator('[data-test="shopping-cart-badge"]');
  }

  async anadirProducto(nombre) {
    await this.page.locator(`[data-test="add-to-cart-${nombre}"]`).click();
  }

  async quitarProducto(nombre) {
    await this.page.locator(`[data-test="remove-${nombre}"]`).click();
  }
}

module.exports = { InventoryPage };