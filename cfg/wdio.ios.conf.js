import { config } from "../cfg/wdio.shared.conf.js";
import path from "path";

//
// ============
// Specs
// ============
config.specs = [
  // ToDo: define location for spec files here
  "../test/specs/ios/*.spec.js",
];
//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "ios",
    "appium:deviceName": "iPhone 15",
    "appium:platformVersion": "17.5",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/RosettaStoneLanguages.app"),
    "appium:options": {
      autoAcceptAlerts: true, // Automatically accept alerts
      autoDismissAlerts: false, // Automatically dismiss alerts (set to true if you want to dismiss)
    },
  },
];

export { config };
