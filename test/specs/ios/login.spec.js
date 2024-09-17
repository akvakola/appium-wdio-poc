import { default as loginPage } from "../../screen-objects/ios/login.page.js";
import { expect, driver, $ } from "@wdio/globals";
import { checkScreen } from "../../utils/visual-regression.js";
import { tapOn, type } from "../../utils/helpers.js";

// describe("Login screen tests", () => {
//   //   it("Verify iOS is loaded", async () => {
//   //     await expect(loginPage.getStartedButton).toBeDisplayed();
//   //     await checkScreen("login_screen");
//   //   });
//   //   it("Verify title is displayed", async () => {
//   //     await expect(loginPage.learnLanguagesTitle).toBeDisplayed();
//   //   });
//   //   it("Verify login is displayed", async () => {
//   //     await expect(loginPage.logInButton).toBeDisplayed();
//   //   });
//   //   it("Verify secondary logo is displayed", async () => {
//   //     await expect(loginPage.secondaryLogo).toBeDisplayed();
//   //   });
//   //   // LOG IN TESTS
//   //   it("Verify sign in page is displayed", async () => {
//   //     await loginPage.logInButton.click();
//   //     await loginPage.personalLoginButton.waitForDisplayed();
//   //     await driver.pause(2000); // Wait for the animation to end
//   //     await checkScreen("sign_in_screen");
//   //   });
//   //   it("Verify personal login button is displayed", async () => {
//   //     await expect(loginPage.personalLoginButton).toBeDisplayed();
//   //   });
//   //   it("Verify Work or School login button is displayed", async () => {
//   //     await expect(loginPage.workSchoolLoginButton).toBeDisplayed();
//   //   });
// it("Progress", async () => {
//   await tapOn(loginPage.logInButton);
//   await tapOn($("~Personal Most Common"));
//   await type($("~personal_login_username"), "trollzod@rosettastone.com");
//   await type($("~personal_login_password"), "test.123");
//   await driver.keys("\uE007");
//   await tapOn($("~UNIT 1"));
//   await tapOn($("~Vocabulary"));
//   const reset = $("~path_reset");

//   if (await $("~In Progress").isExisting()) {
//     await reset.click();
//     await tapOn($('//XCUIElementTypeButton[@name="Reset"]'));
//   }

//   const startLearningButton = $(
//     '(//XCUIElementTypeButton[@name="path_start"])[2]'
//   );
//   await tapOn(startLearningButton);
//   await tapOn($("~Yes"));
//   await $(
//     "~Tap the image that matches the spoken words or text."
//   ).waitForDisplayed();
//   await tapOn(
//     $(
//       '//XCUIElementTypeOther[@name="pathPlayer"]/XCUIElementTypeScrollView[1]/XCUIElementTypeOther[1]'
//     )
//   );

//   async function handleDisplayAndTap(label, firstSelector, secondSelector) {
//     if (await $(`//*[@label="${label}"]`).isDisplayed()) {
//       await driver.pause(1000);
//       await tapOn($(firstSelector));
//     } else {
//       await driver.pause(1000);
//       await tapOn($(secondSelector));
//     }
//   }

//   const selector1 =
//     '//XCUIElementTypeOther[@name="actview_0"]/XCUIElementTypeImage';
//   const selector2 =
//     '//XCUIElementTypeOther[@name="actview_1"]/XCUIElementTypeImage';

//   // Handle for "¡Hola!"
//   await handleDisplayAndTap("¡Hola!", selector1, selector2);

//   // Handle for "¡Adiós!"
//   await handleDisplayAndTap("¡Adiós!", selector2, selector1);
//   await driver.pause(3000);
//   await tapOn($("~pauseButton"));
//   await tapOn($("~OK"));
//   await tapOn($("~EXIT"));
//   await $("~In Progress").waitForDisplayed();
//   await checkScreen("progress_1");
// });
// });
