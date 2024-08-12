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
    // TODO - dodaj upute za kompajliranje app-a za odredjeni uredjaj/emulator (app, ipa, itd...)
    "appium:deviceName": "iPhone 15",
    // TODO - dodaj upute za iOS verzije kod kompajliranja
    "appium:platformVersion": "17.5",
    "appium:automationName": "XCUITest",
    // TODO - parametrizirat ime aplikacije iz nekog prikladnog env fajla
    "appium:app": path.join(process.cwd(), "app/ios/RosettaStoneLanguages.app"),
    "appium:options": {
      autoAcceptAlerts: true, // Automatically accept alerts
      autoDismissAlerts: false, // Automatically dismiss alerts (set to true if you want to dismiss)
    },
  },
];

export { config };
