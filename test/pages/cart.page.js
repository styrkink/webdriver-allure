const InventoryPage = require("./inventory.page");

class CartPage {
  get cartItem() {
    return $(".cart_item");
  }
  get cartItemName() {
    return $(".inventory_item_name");
  }
  get removeButton() {
    return $(".btn.btn_secondary.btn_small.cart_button");
  }

  async openCart() {
    await InventoryPage.cartButton.click();
  }

  async getCartItemName() {
    return await this.cartItemName.getText();
  }

  async removeItem() {
    await this.removeButton.click();
  }
}

module.exports = new CartPage();
