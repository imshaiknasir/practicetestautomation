import { Page, Locator } from "@playwright/test";

export class LoginPage {
  constructor(protected page: Page) {}

  readonly usernameInput: Locator = this.page.getByLabel("Username");
  readonly passwordInput: Locator = this.page.getByLabel("Password");
  readonly submitButton: Locator = this.page.getByRole("button", {
    name: "Submit",
  });
  readonly errorMessage: Locator = this.page.locator("#error");

  async gotoLoginPage() {
    await this.page.goto("/practice-test-login", {
      waitUntil: "domcontentloaded",
    });
  }

  async getPageTitle() {
    return this.page.title();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async getErrorMessage() {
    return this.errorMessage.textContent();
  }
}
