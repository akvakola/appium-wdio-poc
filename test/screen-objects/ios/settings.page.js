import { tapOn } from "../../utils/helpers.js";

class SettingsPage {
  get signOutButton() {
    return $("~settings_sign_out_button");
  }
  get confirmSignOutButton() {
    return $("~Sign Out");
  }

  async logout() {
    tapOn(this.signOutButton);
    tapOn(this.confirmSignOutButton);
  }
}

export default new SettingsPage();
