import { default as loginPage } from "../../screen-objects/ios/login.page.js";
import { expect, driver, $ } from "@wdio/globals";
import { checkScreen } from "../../utils/visual-regression.js";

describe("iOS", () => {
  it("Verify iOS is loaded ", async () => {
    // await $("~Get Started").click();
    await expect($("~Get Started")).toBeDisplayed();
    await expect(loginPage.getStartedButton).toBeDisplayed();
    await driver.pause(10000);
    await checkScreen("screen");
  });
});
