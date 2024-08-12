import { config } from "../cfg/wdio.shared.conf.js";
import path from "path";
import { env } from "../env.js";

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
    // capabilities for local Appium web tests on an Android Simulator
    "appium:platformName": "ios",
    // Make sure that in your XCode the same Device Type is installed as in the appium:deviceName value
    // Make sure in your XCode the OS Version is installed on the Device
    // Steps: Open Xcode, select Window > Devices and Simulators, click the "+" button in the bottom and add the Name, Type and OS Version
    "appium:deviceName": "iPhone 15",
    "appium:platformVersion": "17.5",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), `app/ios/${env.iOsApp}`),
    "appium:options": {
      autoAcceptAlerts: true, // Automatically accept alerts
      autoDismissAlerts: false, // Automatically dismiss alerts (set to true if you want to dismiss)
    },
  },
];

export { config };
