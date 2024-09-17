import { default as loginPage } from "../../../screen-objects/ios/login.page.js";
import { expect, driver, $ } from "@wdio/globals";
import menuPage from "../../../screen-objects/ios/menu.page.js";
import { users } from "../../../../data/users.js";
import { shouldBeDisplayed, tapOn, type } from "../../../utils/helpers.js";
import extendedLearningPage from "../../../screen-objects/ios/extended-learning.page.js";

describe("Extended learning Smoke Tests", () => {
  it("1.0 Fresh install and launch the application", async () => {
    await expect(loginPage.getStartedButton).toBeDisplayed();
  });
  it("1.1 Login", async () => {
    await expect(loginPage.logInButton).toBeDisplayed();
    await tapOn(loginPage.logInButton);
    await expect($("~What type of account do you have?")).toBeDisplayed();
    await tapOn(loginPage.personalLoginButton);
    await shouldBeDisplayed(loginPage.emailInput);
    await shouldBeDisplayed(loginPage.passwordInput);
    await type(loginPage.emailInput, users.consumer.email);
    await type(loginPage.passwordInput, users.consumer.password);
    await driver.keys("\uE007");
    await $("~Rosetta Stone Course").waitForDisplayed({ timeout: 30000 });
    await expect($("~Rosetta Stone Course")).toBeDisplayed();
  });

  it("2.1 Enter Stories section", async () => {
    await tapOn(menuPage.extendedLearningMenuItem);
    await tapOn(extendedLearningPage.storiesButton);
  });
  it("2.2 Download a Story activity", async () => {
    const firstDownloadButton = $(
      '//XCUIElementTypeCell[@name="stories_topic_1"]/XCUIElementTypeOther/XCUIElementTypeImage[2]'
    );
    await tapOn(firstDownloadButton);
    const playIcon = $("~stories_home_unit_play_icon");
    await shouldBeDisplayed(playIcon);
    await tapOn(playIcon);
  });
  it("2.3 Complete Story activity", async () => {
    const listenTab = $("~stories_listen_tab");
    const readTab = $("~stories_read_tab");
    const recordTab = $("~stories_record_tab");

    await tapOn(listenTab);
    await shouldBeDisplayed($("~Listen to the story"));
    await driver.pause(1000);
    await tapOn(readTab);
    await shouldBeDisplayed($("~Read the story"));
    await driver.pause(1000);
    await tapOn(recordTab);
    await driver.pause("2000");
    await tapOn(recordTab);
    await shouldBeDisplayed($("~Record yourself reading the story"));
    await shouldBeDisplayed($("~Tap to record"));

    await tapOn(extendedLearningPage.stories.activityCloseButton);
    await tapOn(extendedLearningPage.stories.homeBackButton);
    await driver.rotateDevice(0, 0, 0);
    await driver.pause("1000");
  });

  it("3.1 Enter the Audio companion section", async () => {
    await tapOn(extendedLearningPage.audioCompanionButton);
    await shouldBeDisplayed($("~Audio Companion"));
  });
  it("3.2 Download an audio activity", async function () {
    const firstDownloadButton = $(
      '(//XCUIElementTypeImage[@name="MenuDownloadLessonIcon"])[1]'
    );
    await tapOn(firstDownloadButton);
    const playButton = await $("~MenuPlayChevron");
    await playButton.waitForDisplayed({ timeout: 5000000 });
  });
  it("3.3 Play audio activity", async () => {
    const playButton = await $("~MenuPlayChevron");
    const loadingMsg = $("~Loading...");
    await shouldBeDisplayed(loadingMsg);
    await loadingMsg.waitForDisplayed({ reverse: true, timeout: 50000 });
    await driver.pause(1000);
    await tapOn($("~Lesson 1"));
    const languageBasicsText = $(
      '//XCUIElementTypeStaticText[@name="Unit 1: Language Basics"]'
    );
    await shouldBeDisplayed(languageBasicsText);
    await tapOn(languageBasicsText);
  });
  it("3.4 Delete an audio activity", async () => {
    const firstDownloadButton = $(
      '(//XCUIElementTypeImage[@name="MenuDownloadLessonIcon"])[1]'
    );
    await tapOn(extendedLearningPage.audioCompanion.manageDownloadsButton);
    const deleteButton = $(
      '(//XCUIElementTypeButton[@name="MenuDeleteLessonIcon"])[1]'
    );
    await shouldBeDisplayed(deleteButton);
    await tapOn(deleteButton);
    await shouldBeDisplayed(firstDownloadButton);
  });
  it("4.1 Enter the phrasebook section", async () => {
    await tapOn($("~audioMenuBack"));
    await tapOn(extendedLearningPage.phrasebookButton);
    await shouldBeDisplayed(
      $(
        "~Hear a native speaker pronounce common phrases and then practice saying them yourself."
      )
    );
  });
  it("4.2 Enter and complete the activity", async () => {
    await tapOn(extendedLearningPage.phrasebook.meetingPeopleLabel);
    const greetingsTab = $(
      '//XCUIElementTypeButton[@name="Greetings and Farewells"]'
    );
    const languagesTab = $('//XCUIElementTypeStaticText[@name="Languages"]');
    await shouldBeDisplayed(greetingsTab);
    await tapOn(extendedLearningPage.phrasebook.previewButton);
    await shouldBeDisplayed(
      $(
        '(//XCUIElementTypeStaticText[@name="phrasebook_translated_phrase"])[1]'
      )
    );
    await tapOn(extendedLearningPage.phrasebook.previewButton);
    await driver.pause(500);
    await tapOn(
      $('(//XCUIElementTypeButton[@name="phrasebook_play_phrase"])[1]')
    );
    await tapOn(languagesTab);
  });
  it("5.1 Offline mode", async () => {
    await driver.pause(1000);
    await tapOn(extendedLearningPage.phrasebook.activityBackButtn);
    await tapOn($("~USE OFFLINE"));
    // await tapOn($("~Download"))
    // await tapOn($("~OK"));
    await shouldBeDisplayed($("~AVAILABLE OFFLINE"));
  });
});
