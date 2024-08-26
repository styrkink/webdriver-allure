const LoginPage = require("./login.page");

class InventoryPage {
  get addToCartButton() {
    return $("#add-to-cart-sauce-labs-backpack");
  }
  get cartButton() {
    return $(".shopping_cart_link");
  }
  get shoppingCartBadge() {
    return $(".shopping_cart_badge");
  }
  get burgerMenuButton() {
    return $("#react-burger-menu-btn");
  }
  get burgerMenu() {
    return $(".bm-menu-wrap");
  }
  get menuItemsCount() {
    return $$(".bm-item-list .bm-item");
  }
  get logoutButton() {
    return $("#logout_sidebar_link");
  }
  get aboutLink() {
    return $("#about_sidebar_link");
  }
  get sortButton() {
    return $(".product_sort_container");
  }
  get priceElements() {
    return $$(".inventory_item_price");
  }
  get nameElements() {
    return $$(".inventory_item_name");
  }
  get elementName() {
    return $('[data-test="inventory-item-name"]');
  }
  get removeButton() {
    return $(".btn.btn_secondary.btn_small.btn_inventory");
  }
  get backToProducts() {
    return $("#back-to-products");
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async removeItem() {
    await this.removeButton.click();
  }

  async getCartItemCount() {
    return await this.shoppingCartBadge.getText();
  }

  async openBurgerMenu() {
    await this.burgerMenuButton.click();
    await this.burgerMenu.waitForDisplayed();
    expect(await this.menuItemsCount.length).toBe(4);
  }

  async clickLogout() {
    await this.logoutButton.click();
    await browser.waitUntil(
      async () => (await browser.getUrl()) === "https://www.saucedemo.com/"
    );
    expect(await LoginPage.usernameField.getValue()).toBe("");
    expect(await LoginPage.passwordField.getValue()).toBe("");
  }

  async clickAboutLink() {
    await this.aboutLink.click();
  }

  async clickElementName() {
    await this.elementName.click();
  }

  async sortBy(sortType) {
    await this.sortButton.selectByVisibleText(sortType);
  }

  async getProductPrices() {
    const productPrices = [];
    for (let elem of await this.priceElements) {
      const priceText = await elem.getText();
      productPrices.push(parseFloat(priceText.replace("$", "")));
    }
    return productPrices;
  }

  async getProductNames() {
    const productNames = [];
    for (let elem of await this.nameElements) {
      productNames.push(await elem.getText());
    }
    return productNames;
  }

  async backToProductsClick() {
    await this.backToProducts.click();
  }

  async sortByPriceUp() {
    await this.sortBy("Price (low to high)");
    const productPrices = await this.getProductPrices();
    return productPrices;
  }

  async sortByPriceDown() {
    await this.sortBy("Price (high to low)");
    const productPrices = await this.getProductPrices();
    return productPrices;
  }

  async sortByNameUp() {
    await this.sortBy("Name (A to Z)");
    const productNames = await this.getProductNames();
    return productNames;
  }

  async sortByNameDown() {
    await this.sortBy("Name (Z to A)");
    const productNames = await this.getProductNames();
    return productNames;
  }
}

module.exports = new InventoryPage();
