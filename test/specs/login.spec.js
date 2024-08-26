const LoginPage = require("../pages/login.page");
const InventoryPage = require("../pages/inventory.page");
const {
  username,
  password,
  lockedUsername,
  invalidUsername,
  invalidPassword,
} = require("../utils/credentials");

describe("Login/Logout Functionality", () => {
  beforeEach(async () => {
    await LoginPage.openLoginPage();
  });

  it("Should login with valid credentials", async () => {
    await LoginPage.login(username, password);
    await expect(browser).toHaveUrlContaining("/inventory.html");
  });

  it("Should not login with invalid password", async () => {
    await LoginPage.login(username, invalidPassword);
    expect(await LoginPage.errorMessage).toBeDisplayed();
    expect(await LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Should not login with invalid login", async () => {
    await LoginPage.login(invalidUsername, password);
    expect(await LoginPage.errorMessage).toBeDisplayed();
    expect(await LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Should not login with locked out user", async () => {
    await LoginPage.login(lockedUsername, password);
    expect(await LoginPage.errorMessage).toBeDisplayed();
    expect(await LoginPage.errorMessage).toHaveTextContaining(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("Should logout. Return to login page, login and password fields are empty", async () => {
    await LoginPage.login(username, password);
    await InventoryPage.openBurgerMenu();
    await InventoryPage.clickLogout();
    await expect(browser).toHaveUrlContaining("/");
    await expect(LoginPage.usernameField).toBeDisplayed();
    await expect(LoginPage.passwordField).toBeDisplayed();
    await expect(LoginPage.usernameField).toHaveValue("");
    await expect(LoginPage.passwordField).toHaveValue("");
  });
});
