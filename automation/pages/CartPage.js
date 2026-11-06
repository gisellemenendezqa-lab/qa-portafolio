class CartPage {
  constructor(page) {
    this.page = page;
    this.nombreProducto = page.locator('[data-test="inventory-item-name"]');
    this.titulo = page.locator('[data-test="title"]');
  }
}

module.exports = { CartPage };