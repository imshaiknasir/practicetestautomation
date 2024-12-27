import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { LoggedInPage } from "./LoggedinPage";

export class POManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly loggedInPage: LoggedInPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.loggedInPage = new LoggedInPage(page);
  }

  getLoginPage(): LoginPage {
    return this.loginPage;
  }

  getLoggedInPage(): LoggedInPage {
    return this.loggedInPage;
  }
}
