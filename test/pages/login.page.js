class LoginPage {
  get usernameField() {
    return $("#user-name");
  }
  get passwordField() {
    return $("#password");
  }
  get loginButton() {
    return $("#login-button");
  }
  get errorMessage() {
    return $(".error-message-container");
  }

  async openLoginPage() {
    await browser.url("/");
  }

  async login(username, password) {
    await this.usernameField.setValue(username);
    expect(this.usernameField).toHaveTextContaining(username);
    await this.passwordField.setValue(password);
    expect(this.passwordField).toHaveTextContaining(password);
    expect(this.passwordField).toHaveAttr("type", "password");
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
