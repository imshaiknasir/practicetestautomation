import { test as base, expect } from "@playwright/test";
import { POManager } from "../pages/POManager";

type TestFixtures = {
  poManager: POManager;
};

const test = base.extend<TestFixtures>({
  poManager: async ({ page }, use) => {
    const poManager = new POManager(page);
    await use(poManager);
  },
});

test.describe("Verify login page", () => {
  let loginPage;
  let loggedInPage;

  test.beforeEach(async ({ poManager }) => {
    loginPage = poManager.getLoginPage();
    loggedInPage = poManager.getLoggedInPage();
  });

  test("has title", async () => {
    await loginPage.gotoLoginPage();
    expect(await loginPage.getPageTitle()).toBe(
      "Test Login | Practice Test Automation"
    );
  });

  test("has necessary elements", async () => {
    await loginPage.gotoLoginPage();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test("with valid credentials", async () => {
    await loginPage.gotoLoginPage();
    await loginPage.login("student", "Password123");

    // Assert for success message
    expect(await loggedInPage.getSuccessMessage()).toBe(
      "Logged In Successfully"
    );
  });

  test("with valid credentials and assert with API", async ({ request }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login("student", "Password123");

    // Assert with API
    const response = await request.get(
      "https://practicetestautomation.com/logged-in-successfully/"
    );
    expect(response.status()).toBe(200);
    expect(response.statusText()).toBe("OK");
  });

  test("with valid credentials and logout", async () => {
    await loginPage.gotoLoginPage();
    await loginPage.login("student", "Password123");
    await expect(loggedInPage.logoutButton).toBeVisible();

    // Logout
    await loggedInPage.logoutButton.click();

    // Return to login page
    expect(await loginPage.getPageTitle()).toBe(
      "Test Login | Practice Test Automation"
    );
  });

  test("with invalid username and password credentials", async () => {
    await loginPage.gotoLoginPage();
    await loginPage.login("student1", "Password123");
    expect(await loginPage.getErrorMessage()).toBe("Your username is invalid!");
  });

  test.fail("by accessing logged in page without login", async () => {
    await loggedInPage.gotoLoggedInPage();

    expect(await loginPage.getPageTitle()).toBe(
      "Test Login | Practice Test Automation"
    );
  });
});
