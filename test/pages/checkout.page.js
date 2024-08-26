class CheckoutPage {
  get inventoryItem() {
    return $("#inventory-item");
  }
  get checkoutButton() {
    return $("#checkout");
  }
  get checkoutForm() {
    return $("#checkout_info_container");
  }
  get firstNameField() {
    return $("#first-name");
  }
  get lastNameField() {
    return $("#last-name");
  }
  get postalCodeField() {
    return $("#postal-code");
  }
  get continueButton() {
    return $("#continue");
  }
  get finishButton() {
    return $("#finish");
  }
  get backHomeButton() {
    return $("#back-to-products");
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.postalCodeField.setValue(postalCode);
  }

  async confirmCeckoutForm() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async backToHome() {
    await this.backHomeButton.click();
  }
}

module.exports = new CheckoutPage();
