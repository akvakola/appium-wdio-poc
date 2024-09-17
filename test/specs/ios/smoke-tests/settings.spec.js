import { expect, driver, $ } from "@wdio/globals";
import { shouldBeDisplayed, tapOn, type } from "../../../utils/helpers.js";
import { scrollDown, scrollToElementId } from "../../../utils/scrolls.js";
import menuPage from "../../../screen-objects/ios/menu.page.js";
import { users } from "../../../../data/users.js";
import settingsPage from "../../../screen-objects/ios/settings.page.js";
import loginPage from "../../../screen-objects/ios/login.page.js";

describe("App Launching and Login Smoke Test", () => {
  it("1.1 Fresh install and launch the application", async () => {
    await expect(loginPage.getStartedButton).toBeDisplayed();
  });
  it("1.2 Tap login", async () => {
    await expect(loginPage.logInButton).toBeDisplayed();
    await tapOn(loginPage.logInButton);
    await expect($("~What type of account do you have?")).toBeDisplayed();
  });
  it("2.1 Tap on Personal account login options", async () => {
    await tapOn(loginPage.personalLoginButton);
    await shouldBeDisplayed(loginPage.emailInput);
    await shouldBeDisplayed(loginPage.passwordInput);
  });
  it("2.2 Login to an existing consumer subscription account", async () => {
    await type(loginPage.emailInput, users.consumer.email);
    await type(loginPage.passwordInput, users.consumer.password);
    await driver.keys("\uE007");
    await $("~Rosetta Stone Course").waitForDisplayed({ timeout: 30000 });
    await expect($("~Rosetta Stone Course")).toBeDisplayed();
  });
  it("a) Learning languages", async () => {
    await tapOn(menuPage.settingsButton);
    await shouldBeDisplayed($("~RosettaStoneLanguages.SettingsView"));
  });
});
