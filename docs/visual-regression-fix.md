### For using the visual regression feature make sure the disableWebdriverScreenshotsReporting is set to true, this will disable the screenshot generation in the allure reporter. This is actually a bug on WDIO side https://github.com/webdriverio/visual-testing/issues/392

`js
reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
`
