const LoginPage = require("../pages/login.page");
const InventoryPage = require("../pages/inventory.page");
const CartPage = require("../pages/cart.page");
const CheckoutPage = require("../pages/checkout.page");
const { validCustomer } = require("../helpers/helper");
const { username, password } = require("../utils/credentials");

describe("Checkout Process", () => {
  beforeEach(async () => {
    await LoginPage.openLoginPage();
    await LoginPage.login(username, password);
  });

  it("Should complete a checkout with valid data", async () => {
    await InventoryPage.addToCart();
    await expect(await InventoryPage.getCartItemCount()).toEqual("1");
    await CartPage.openCart();
    await CheckoutPage.startCheckout();
    await CheckoutPage.checkoutForm.isDisplayed();
    await CheckoutPage.fillCheckoutForm(
      validCustomer.firstName,
      validCustomer.lastName,
      validCustomer.postalCode
    );
    await CheckoutPage.confirmCeckoutForm();
    await CheckoutPage.finishCheckout();
    await CheckoutPage.backToHome();
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(await InventoryPage.shoppingCartBadge.isDisplayed()).toBe(
      false
    );
  });

  it('Could not go to checkout with empty cart, error message "Cart is empty" is displayed', async () => {
    await CartPage.openCart();
    await expect(await CheckoutPage.inventoryItem.isDisplayed()).toBe(false);
    await CheckoutPage.startCheckout();
    await expect(browser).toHaveUrlContaining("/cart.html");
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await expect(LoginPage.errorMessage).toHaveTextContaining("Cart is empty");
  });
});
