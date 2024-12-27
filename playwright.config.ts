import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 1,
  timeout: 10 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  reporter: [["html"], ["list"]],
  use: {
    baseURL: "https://practicetestautomation.com/",
    trace: "on",
    screenshot: "on",
  },
});
