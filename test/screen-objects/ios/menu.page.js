class Menu {
  get learnMenuItem() {
    return $("~tabbar_learn");
  }
  get extendedLearningMenuItem() {
    return $("~tabbar_extras");
  }
  get liveMenuItem() {
    return $("~tabbar_live");
  }
  get fullAccessMenuItem() {
    return $("~tabbar_full_access");
  }
  get backButton() {
    return $("~back");
  }
  get settingsButton() {
    return $("~courses_view_settings");
  }
}

export default new Menu();
