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
  it("2.3 Sign Out", async () => {
    await tapOn(menuPage.settingsButton);
    await scrollDown();
    await settingsPage.logout();
    await shouldBeDisplayed(loginPage.getStartedButton);
  });
  it("3.1 E&E -  Tap login, login screen should open", async () => {
    await expect(loginPage.logInButton).toBeDisplayed();
    await tapOn(loginPage.logInButton);
    await shouldBeDisplayed($("~What type of account do you have?"));
  });
  it("3.2 E&E - Tap Work or school account login option", async () => {
    await tapOn(loginPage.workSchoolLoginButton);
    await shouldBeDisplayed(loginPage.workspaceInput);
  });
  it("3.3 E&E - Login with existing E&E account", async () => {
    await type(loginPage.institutionalUsernameInput, users.EnE.email);
    await type(loginPage.institutionalPasswordInput, users.EnE.password);
    await loginPage.institutionalWorkspaceInput.clearValue();
    await type(loginPage.institutionalWorkspaceInput, users.EnE.workspace);
    await driver.keys("\uE007");
    await shouldBeDisplayed(
      $('//XCUIElementTypeStaticText[@name="Unit 1: Language Basics"]')
    );
    if (await $("~back").isDisplayed()) {
      while (await $("~back").isDisplayed()) {
        await tapOn($("~back"));
      }
    }
  });
  it("3.4 E&E - Sign Out", async () => {
    await tapOn(menuPage.settingsButton);
    // await scrollDown();
    await scrollToElementId($("~SIGN OUT"));
    await settingsPage.logout();
    await shouldBeDisplayed(loginPage.getStartedButton);
  });
  it("4.1 SSO - Tap login, login screen should open", async () => {
    await expect(loginPage.getStartedButton).toBeDisplayed();
    await tapOn(loginPage.logInButton);
    await shouldBeDisplayed(loginPage.ssoLogin);
  });
  it("4.2 SSO - Tap on the I have an SSO account login option", async () => {
    await tapOn(loginPage.ssoLogin);
    await type(loginPage.ssoCodeInput, users.sso.code);
    await tapOn(loginPage.ssoNextButton);
    await type(loginPage.ssoUsernameInput, users.sso.email);
    await type(loginPage.ssoPasswordInput, users.sso.password);
    // await driver.keys("\uE007");
    // await tapOn("~OK");
    // await tapOn("~✕");
    // await tapOn(
    //   '//XCUIElementTypeOther[@name="Rosetta Stone® Language-Learning Software"]/XCUIElementTypeOther[1]/XCUIElementTypeOther[2]'
    // );
    // await tapOn("~Sign out");
    // await shouldBeDisplayed("~You are now signed out");
  });
});
