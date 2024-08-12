import { config } from "../cfg/wdio.shared.conf.js";
import path from "path";

//
// ============
// Specs
// ============
config.specs = [
  // ToDo: define location for spec files here
  "../test/specs/android/*.spec.js",
];
//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    // capabilities for local Appium web tests on an Android Emulator
    "appium:platformName": "Android",
    // TODO - isto ko u iOS cfg
    "appium:deviceName": "Pixel 3 A11",
    "appium:platformVersion": "11.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
  },
];

export { config };
