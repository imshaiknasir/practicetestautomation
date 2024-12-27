# Practice Test Automation

E2E test automation project using Playwright for https://practicetestautomation.com/

## Prerequisites

- Node.js 18+
- npm (Node Package Manager)

## Setup

1. Clone the repository:

```bash
git clone git@github.com:imshaiknasir/practicetestautomation.git
cd practicetestautomation
```

2. Install dependencies:

```bash
npm i && npm run deps
```

## Running Tests

Run all tests:

```bash
npm run test
```

Run tests with UI mode:

```bash
npm run test:ui
```

Run tests with headed mode:

```bash
npm run test:headed
```

## Test Reports

- HTML report is automatically generated after test runs
- View the report:

```bash
npm run test:report
```

## Project Structure

```
├── pages/              # Page Object Models
│   ├── LoginPage.ts    # Login page interactions
│   └── POManager.ts    # Page object manager
├── tests/              # Test files
│   └── login.spec.ts   # Login tests
├── docs/               # Documentation
│   └── FunctionalTestCases.md # Functional Test Cases
├── playwright.config.ts # Playwright configuration
└── package.json        # Project configuration
```

## Configuration

- Tests run against: https://practicetestautomation.com/
- Browsers: Chromium
- Retries: 1
- Timeout: 10 seconds
- Screenshots and traces are enabled
