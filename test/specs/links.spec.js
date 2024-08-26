const LoginPage = require("../pages/login.page");
const FooterPage = require("../pages/footer.page");
const InventoryPage = require("../pages/inventory.page");
const { username, password } = require("../utils/credentials");

describe("Checking links", () => {
  before(async () => {
    await LoginPage.openLoginPage();
    await LoginPage.login(username, password);
  });

  it("Should open twitter in new tab", async () => {
    await FooterPage.clickTwitterButton();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect(browser).toHaveUrlContaining("https://x.com/saucelabs");
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
  });

  it("Should open facebook in new tab", async () => {
    await FooterPage.clickFacebookButton();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect(browser).toHaveUrlContaining(
      "https://www.facebook.com/saucelabs"
    );
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
  });

  it("Should open Linkedin in new tab", async () => {
    await FooterPage.clickLinkedinButton();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    await expect(browser).toHaveUrlContaining(
      "https://www.linkedin.com/company/sauce-labs/"
    );
    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
  });

  it("Should redirect to the saucelabs.com", async () => {
    await InventoryPage.openBurgerMenu();
    await InventoryPage.clickAboutLink();
    await expect(browser).toHaveUrlContaining("https://saucelabs.com/");
  });
});
