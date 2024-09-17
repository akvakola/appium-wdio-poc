class ExtendedLearning {
  get phrasebookButton() {
    return $("~Phrasebook");
  }
  get storiesButton() {
    return $("~Stories");
  }
  get audioCompanionButton() {
    return $("~Audio Companion");
  }
  stories = {
    get activityCloseButton() {
      return $("~stories_activity_close");
    },
    get homeBackButton() {
      return $("~stories_home_back_button");
    },
  };
  audioCompanion = {
    get manageDownloadsButton() {
      return $("~MANAGE DOWNLOADS");
    },
    get backButton() {
      return $("~back-light");
    },
  };
  phrasebook = {
    get meetingPeopleLabel() {
      return $("~Meeting People");
    },
    get previewButton() {
      return $("~phrasebook_preview_button");
    },
    get activityBackButtn() {
      return $('//XCUIElementTypeButton[@name="phrasebook_activity_back"]');
    },
    get backButton() {
      return $("~phrasebook_home_back");
    },
  };
}

export default new ExtendedLearning();
