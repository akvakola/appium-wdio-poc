# Appium and WebdriverIO Implementation Documentation

## Folder Structure

The tests for the project are organized into various folders such as `app`, `cfg`, `docs`, `test`, and `utils`. Each folder has a specific purpose in the test architecture. Below is a brief overview of each folder:

### a. App Folder:

This folder contains the mobile application binaries or APKs/IPA files for Android and iOS platforms.

- **android**: Contains Android application files.
- **ios**: Contains iOS application files.

### b. Config (cfg) Folder:

This folder contains configuration files for WebdriverIO.

- **wdio.android.conf.js**: Configuration file for running tests on Android devices.
- **wdio.ios.conf.js**: Configuration file for running tests on iOS devices.
- **wdio.shared.conf.js**: Shared configuration file for common settings between Android and iOS tests.

### c. Docs Folder:

This folder contains documentation related to the test framework and guidelines.

- **contribution.md**: Guidelines for contributing to the project.
- **errors.md**: Documentation of common errors and troubleshooting steps.
- **running-servers.md**: Instructions for running the necessary servers for testing.
- **selector-types.md**: Guide on selector types used in the tests.

### d. Test Folder:

This folder contains the actual test scripts and related data.

- **data**: Contains test data and screen objects.
  - **screenobjects**
    - **android**: Screen objects for Android.
    - **ios**: Screen objects for iOS.
    - **ios**
      - **login.page.js**: Page object for the iOS login page.
- **specs**: Contains test specifications.
  - **android**: Test specs for Android.
    - **android.spec.js**: Test cases for Android.
  - **ios**: Test specs for iOS.
    - **ios.spec.js**: Test cases for iOS.

### e. Utils Folder:

This folder contains utility scripts and common functions.

- **visual-regression.js**: Script for visual regression testing.

### f. Tests Folder:

This folder is used for storing baseline images and results for visual regression tests.

- **baseline/iphone_15**: Baseline images for iPhone 15.
  - **screen--393x852.png**: Baseline image.
- **actual/iphone_15**: Actual images captured during tests.
  - **screen--393x852.png**: Actual image.
- **diff/iphone_15**: Difference images generated during visual regression tests.

## Running and Debugging

- **For Android**: The Virtual Device should be running (Android Studio > More Actions > Virtual Device Manager > Select Virtual Device and click the `START` button )
- **For iOS**: Xcode should be running

- **Running Tests**: Use the following npm scripts to run tests:
  - `test-ios`: Runs iOS tests.
  - `test-android`: Runs Android tests.
  - `report`: Generates test reports.
  - `appium`: Starts the Appium server.
  - `inspector`: Starts the Appium inspector.
  - `check-port`: Checks the port availability.

## Scripts

Here are the npm scripts defined in the `package.json` file:

```json
"scripts": {
  "test-ios": "npm run check-port && rm -rf allure-results tmp && npx wdio ./cfg/wdio.ios.conf.js",
  "test-android": "npm run check-port && rm -rf allure-results tmp && npx wdio ./cfg/wdio.android.conf.js",
  "report": "npx allure open -h localhost -p 8081",
  "appium": "appium",
  "inspector": "appium -p 4724",
  "check-port": "./check-port.sh 4723"
}
```

// If the check-port.sh is unable to run on your machine, you might need to give it executable permissions by using "chmod +x check-port.sh" (run this in the root of the project)

## Example Usage

To run the iOS tests, use the following command:

```sh
npm run test-ios
```

## Best practices

When structuring test automation, it’s essential to maintain clarity, simplicity, and modularity to ensure that the tests are easy to understand, maintain, and extend. A well-organized architecture with clear boundaries for each test file and suite is critical. Below are the best practices for test writing and architecture, particularly when limiting each test suite (`describe` block) to a maximum of 10 test cases and restricting one `describe` block per file.

### 1. Modular Test Suites

`Single describe per File:` Each file should contain only one `describe` block. This approach ensures that each file is dedicated to testing a specific module, feature, or component, making it easier to locate and manage tests related to that functionality.
Focused Test Suites: Limit each `describe` block to `no more than 10 test case`s. This restriction encourages creating concise and focused test suites, which are easier to maintain and understand.

### 2. File Naming Conventions

`Descriptive File Names:` Use descriptive and consistent naming conventions for test files that reflect the functionality or module being tested. For example, `user-authentication.spec.js` or `checkout-process.spec.js.`
`Directory Structure:` Organize test files into directories that mirror the structure of your application’s components or features. This makes it easier to navigate and manage the test suite as it grows.

### 3. Clear Test Case Definitions

`Single Responsibility:` Each test case should test a single piece of functionality or a specific behavior. Avoid combining multiple assertions in one test case, as this can make failures harder to diagnose.
`Test Case Naming:` Use meaningful names for test cases that clearly describe the expected behavior. For example, `it('should display an error message for invalid login credentials')` is more descriptive than `it('should handle login error')`.

### 4. Logical Grouping and Sequencing

`Group Related Tests:` Within the `describe` block, group related test cases together logically. For example, group tests that validate form inputs separately from tests that validate form submission.
`Sequential Execution:` Ensure that the sequence of test cases within a describe block makes logical sense. If possible, structure tests so that they flow from setup to validation without unnecessary dependencies.
