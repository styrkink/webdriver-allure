const LoginPage = require("../pages/login.page");
const InventoryPage = require("../pages/inventory.page");
const { username, password } = require("../utils/credentials");

describe("Sorting Functionality", () => {
  beforeEach(async () => {
    await LoginPage.openLoginPage();
    await LoginPage.login(username, password);
  });

  it("Should sort by price (low to high)", async () => {
    const sortedPrices = await InventoryPage.sortByPriceUp();
    const productPrices = await InventoryPage.getProductPrices();
    expect(productPrices).toEqual(sortedPrices.sort((a, b) => a - b));
  });

  it("Should sort by price (high to low)", async () => {
    const sortedPrices = await InventoryPage.sortByPriceDown();
    const productPrices = await InventoryPage.getProductPrices();
    expect(productPrices).toEqual(sortedPrices.sort((a, b) => b - a));
  });

  it("Should sort by name (A to Z)", async () => {
    const sortedNames = await InventoryPage.sortByNameUp();
    const productNames = await InventoryPage.getProductNames();
    expect(productNames).toEqual(sortedNames.sort());
  });

  it("Should sort by name (Z to A)", async () => {
    const sortedNames = await InventoryPage.sortByNameDown();
    const productNames = await InventoryPage.getProductNames();
    expect(productNames).toEqual(sortedNames.sort().reverse());
  });

  it("Should open an item page", async () => {
    await InventoryPage.clickElementName();
    await expect(browser).toHaveUrlContaining("/inventory-item");
  });

  it("Should return to the inventory page", async () => {
    await InventoryPage.clickElementName();
    await expect(browser).toHaveUrlContaining("/inventory-item");
    await InventoryPage.backToProductsClick();
    await expect(browser).toHaveUrlContaining("/inventory.html");
  });
});
