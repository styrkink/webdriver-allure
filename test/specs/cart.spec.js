const LoginPage = require("../pages/login.page");
const InventoryPage = require("../pages/inventory.page");
const CartPage = require("../pages/cart.page");
const { username, password } = require("../utils/credentials");

describe("Cart functionality", () => {
  beforeEach(async () => {
    await LoginPage.openLoginPage();
    await LoginPage.login(username, password);
  });

  it("Should remove item from cart from inventory page", async () => {
    await InventoryPage.addToCart();
    await expect(await InventoryPage.getCartItemCount()).toEqual("1");
    await InventoryPage.removeItem();
    const isBadgeDisplayed =
      await InventoryPage.shoppingCartBadge.isDisplayed();
    await expect(isBadgeDisplayed).toBe(false);
  });

  it("Should remove item from cart from cart page", async () => {
    await InventoryPage.addToCart();
    await expect(await InventoryPage.getCartItemCount()).toEqual("1");
    await CartPage.openCart();
    await CartPage.removeItem();
    const isBadgeDisplayed =
      await InventoryPage.shoppingCartBadge.isDisplayed();
    await expect(isBadgeDisplayed).toBe(false);
  });

  it("Should save the cart after logout", async () => {
    await InventoryPage.addToCart();
    await expect(await InventoryPage.getCartItemCount()).toEqual("1");
    await InventoryPage.openBurgerMenu();
    await InventoryPage.clickLogout();
    await LoginPage.login(username, password);
    await CartPage.openCart();
    await expect(await CartPage.getCartItemName()).toEqual(
      "Sauce Labs Backpack"
    );
  });
});
