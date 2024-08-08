// import { default as loginPage } from "../../screenobjects/iospages/login.page.js";
import { expect, driver, $ } from "@wdio/globals";
import { checkScreen } from "../../utils/visual-regression.js";

describe("iOS", () => {
  it("Verify iOS is loaded ", async () => {
    // await $("~Get Started").click();
    await expect($("~Get Started")).toBeDisplayed();
    await driver.pause(10000);
    await checkScreen("screen");
    // await expect(loginPage.getStartedButton).toBeDisplayed();
  });
});
