import { config } from "../cfg/wdio.shared.conf.js";
import path from "path";
import { env } from "../env.js";

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
    // Make sure that in your Android Studio the same Device Type is installed as in the appium:deviceName value
    // Make sure in your Android Studio the OS Version is installed on the Device
    // Steps: Open Android Studio > More Actions > Virtual Device Manager, click th e "+" button, Select the Device > Next > Select system image (OS) > Next > Select Name > Finish
    "appium:deviceName": "Pixel 3 A11",
    "appium:platformVersion": "11.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.join(process.cwd(), `app/android/${env.androidApp}`),
  },
];

export { config };
