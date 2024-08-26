class FooterPage {
  get twitterButton() {
    return $('a[href="https://twitter.com/saucelabs"]');
  }
  get facebookButton() {
    return $('a[href="https://www.facebook.com/saucelabs"]');
  }
  get linkedinButton() {
    return $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
  }

  async clickTwitterButton() {
    await this.twitterButton.click();
  }

  async clickFacebookButton() {
    await this.facebookButton.click();
  }

  async clickLinkedinButton() {
    await this.linkedinButton.click();
  }
}

module.exports = new FooterPage();
