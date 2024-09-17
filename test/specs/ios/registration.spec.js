import { default as loginPage } from "../../screen-objects/ios/login.page.js";
import { expect, driver, $ } from "@wdio/globals";
import { checkScreen } from "../../utils/visual-regression.js";
import registrationPage from "../../screen-objects/ios/registration.page.js";
import { scrollDown, scrollUp } from "../../utils/scrolls.js";
import { generateRandomEmail } from "../../utils/random-email.js";
import menuPage from "../../screen-objects/ios/menu.page.js";
import phrasebookPage from "../../screen-objects/ios/phrasebook.page.js";
import { tapOn } from "../../utils/helpers.js";

describe.only("Registration Smoke tests", () => {
  it("Fresh install and launch the application", async () => {
    await expect(loginPage.getStartedButton).toBeDisplayed();
  });

  it("1. Account creation flow - get started", async () => {
    await loginPage.getStartedButton.click();
    await driver.pause(2000); // Wait for the animation to end
    await checkScreen("language_select_top");
    await expect(registrationPage.araLanguageSelect).toBeDisplayed();
    await expect(registrationPage.espLanguageSelect).toBeDisplayed();
    await expect(registrationPage.engLanguageSelect).toBeDisplayed();
    await expect(registrationPage.fraLanguageSelect).toBeDisplayed();
    await expect(registrationPage.itaLanguageSelect).toBeDisplayed();
    await expect(registrationPage.deuLanguageSelect).toBeDisplayed();
    await expect(registrationPage.araLanguageSelect).toBeDisplayed();
    await expect(registrationPage.chiLanguageSelect).toBeDisplayed();
    await expect(registrationPage.nedLanguageSelect).toBeDisplayed();
    await expect(registrationPage.ebrLanguageSelect).toBeDisplayed();
    await expect(registrationPage.tglLanguageSelect).toBeDisplayed();
    await expect(registrationPage.grkLanguageSelect).toBeDisplayed();
    await expect(registrationPage.hebLanguageSelect).toBeDisplayed();
    await scrollDown();
    await expect(registrationPage.hinLanguageSelect).toBeDisplayed();
    await expect(registrationPage.gleLanguageSelect).toBeDisplayed();
    await expect(registrationPage.jpnLanguageSelect).toBeDisplayed();
    await expect(registrationPage.korLanguageSelect).toBeDisplayed();
    await expect(registrationPage.farLanguageSelect).toBeDisplayed();
    await expect(registrationPage.polLanguageSelect).toBeDisplayed();
    await expect(registrationPage.porLanguageSelect).toBeDisplayed();
    await expect(registrationPage.rusLanguageSelect).toBeDisplayed();
    await expect(registrationPage.escLanguageSelect).toBeDisplayed();
    await expect(registrationPage.sveLanguageSelect).toBeDisplayed();
    await expect(registrationPage.turLanguageSelect).toBeDisplayed();
    await expect(registrationPage.vieLanguageSelect).toBeDisplayed();
    await checkScreen("language_select_bottom");
  });

  it("2. Tap on any language, create account screen should show", async () => {
    await scrollUp();
    await registrationPage.espLanguageSelect.click();
    await expect(registrationPage.createAccNavbar).toBeDisplayed();
    await checkScreen("registration_username_1");
  });

  it("3. Enter first name and tap on Next - Email text should be shown", async () => {
    await registrationPage.firstNameInput.addValue("Murphy");
    await checkScreen("registration_username_2");
    await registrationPage.createAccNameNextButton.click();
    await expect(registrationPage.emailInput).toBeDisplayed();
    await checkScreen("registration_email_1");
  });

  it("3. Enter email and tap on Next - Password text should be shown", async () => {
    await registrationPage.emailInput.addValue(generateRandomEmail());
    await registrationPage.createAccEmailNextButton.click();
    await expect(registrationPage.passwordInput).toBeDisplayed({
      timeout: 30000,
    });
    await driver.pause(2000); // Wait for the animation to end
    await checkScreen("registration_password_1");
    const password = "test.123";
    await registrationPage.passwordInput.addValue(password);
    await registrationPage.createAccPasswordNextButton.click();
  });

  it("3. Enter password and tap on Next - Select country dropdown is shown", async () => {
    await expect(registrationPage.selectCountryDropdown).toBeDisplayed();
    await checkScreen("registration_countryDropdown_1");
  });

  it("3. Tap on the Select Country dropdown - account should be created", async () => {
    await expect(registrationPage.createAccountButton).toBeDisplayed();
    await registrationPage.createAccountButton.click();
    await $("~Get Full Access").waitForDisplayed({ timeout: 30000 });
    await checkScreen("registration_purchase_1");
  });

  it("3. Tap on the Select Country dropdown - purchase screen should be displayed", async () => {
    await registrationPage.noThanksButton.click();
    await $("~Try Rosetta Stone for free").waitForDisplayed({ timeout: 30000 });
    await expect($("~Try Rosetta Stone for free")).toBeDisplayed();
    await registrationPage.noThanksButton.click();
  });

  it("4.1 Unlocked content - user should see purchase screen", async () => {
    await menuPage.learnMenuItem.click();
    await $("~UNIT 2").click();
    await $("~Core Lesson 1.1").click();
    await $('(//XCUIElementTypeButton[@name="GET FULL ACCESS"])[1]').click();
    // await $("*=GET FULL ACCESS").click();
    await expect($("~Get Full Access")).toBeDisplayed();
  });

  it("4.2 Unlocked content - unit 1 should be unlocked for demo users", async () => {
    await registrationPage.noThanksButton.click();
    await menuPage.backButton.click();
    await $("~Core Lesson 1.1").waitForDisplayed();
    await menuPage.backButton.click();
    await $("~UNIT 1").click();
    await $("~Core Lesson 1.1").click();
    await expect(
      $('(//XCUIElementTypeStaticText[@name="START LEARNING"])[1]')
    ).toBeDisplayed();
  });

  it("4.3 Phrasebook - all content should be unlocked", async () => {
    await menuPage.backButton.click();
    await $("~Core Lesson 1.1").waitForDisplayed();
    await menuPage.backButton.click();
    await menuPage.extendedLearningMenuItem.click();
    await $("~Phrasebook").click();
    await $("~Dining Out").click();
    await expect($("~Quisiera hacer una reserva.")).toBeDisplayed();
    await $("~phrasebook_activity_back").click();
    await phrasebookPage.backButton.click();
  });

  it("4.3 Stories - only first excersize should be unlocked", async () => {
    await $("~Stories").click();
    await expect(
      $('(//XCUIElementTypeImage[@name="stories_home_unit_lock_icon"])[1]')
    ).toBeDisplayed();
    await expect(
      $('(//XCUIElementTypeImage[@name="stories_home_unit_lock_icon"])[2]')
    ).toBeDisplayed();
    await expect(
      $('(//XCUIElementTypeImage[@name="stories_home_unit_lock_icon"])[3]')
    ).toBeDisplayed();
    await $("~Adiós").click();
    await $("~stories_home_unit_play_icon").waitForDisplayed();
    await $("~Adiós").click();
    await expect($("~Read the story")).toBeDisplayed({ timeout: 20000 });
    await $("~stories_activity_close").click();
    await $("~stories_home_back_button").click();
  });

  it("4.3 Audio companion - only first excersize should be unlocked", async () => {
    await $("~Audio Companion").click();
    await expect($("~MenuDownloadLessonIcon")).toBeDisplayed();
    await expect(
      $('(//XCUIElementTypeImage[@name="MenuLockedLessonIcon"])[1]')
    ).toBeDisplayed();
    await expect(
      $('(//XCUIElementTypeImage[@name="MenuLockedLessonIcon"])[2]')
    ).toBeDisplayed();
    await expect(
      $('(//XCUIElementTypeImage[@name="MenuLockedLessonIcon"])[3]')
    ).toBeDisplayed();
  });

  // it("5.1 Progress - course player should start", async () => {
  //   await $("~audioMenuBack").click();
  //   await menuPage.learnMenuItem.click();
  //   await tapOn("~UNIT 1");
  //   await tapOn("~Vocabulary");
  //   const startLearningButton =
  //     '(//XCUIElementTypeButton[@name="path_start"])[2]';
  //   await tapOn(startLearningButton);
  //   await tapOn("~Yes");
  //   await tapOn(
  //     '//XCUIElementTypeOther[@name="actview_1"]/XCUIElementTypeImage'
  //   );
  //   await tapOn(
  //     '//XCUIElementTypeOther[@name="actview_0"]/XCUIElementTypeImage'
  //   );
  // });
});
