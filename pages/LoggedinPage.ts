import { Page, Locator } from "@playwright/test";

export class LoggedInPage {
  constructor(protected page: Page) { }
  
  readonly successMessage: Locator = this.page.getByRole("heading");
  readonly logoutButton: Locator = this.page.getByText("Log out", {
    exact: true,
  });

  async gotoLoggedInPage() {
    await this.page.goto("/logged-in-successfully", {
      waitUntil: "domcontentloaded",
    });
  }

  async getPageTitle() {
    return this.page.title();
  }

  async getSuccessMessage() {
    return this.successMessage.textContent();
  }
}
