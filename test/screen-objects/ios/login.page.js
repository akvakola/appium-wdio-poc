class LoginPage {
  get getStartedButton() {
    return $("~launch_create_account");
  }
  get logInButton() {
    return $("~Have an account? Log In");
  }
  get secondaryLogo() {
    return $("~logo_secondary");
  }
  get learnLanguagesTitle() {
    return $("~Learn Languages");
  }
  get personalLoginButton() {
    return $("~personal_use_login_button");
  }
  get workSchoolLoginButton() {
    return $("~work_school_login_button");
  }
  get ssoLogin() {
    return $("~I have an SSO code");
  }
  get passwordInput() {
    return $("~personal_login_password");
  }
  get emailInput() {
    return $("~personal_login_username");
  }
  get workspaceInput() {
    return $("~institutional_login_namespace");
  }
  get institutionalUsernameInput() {
    return $("~institutional_login_username");
  }
  get institutionalPasswordInput() {
    return $("~institutional_login_password");
  }
  get institutionalWorkspaceInput() {
    return $("~institutional_login_namespace");
  }
  get ssoCodeInput() {
    return $(
      '//XCUIElementTypeOther[@name="Welcome to Rosetta Stone®!"]/XCUIElementTypeTextField'
    );
  }
  get ssoUsernameInput() {
    return $("~Username");
  }
  get ssoPasswordInput() {
    return $("~Password");
  }
  get ssoNextButton() {
    return $('//XCUIElementTypeStaticText[@name="Next"]');
  }
}

export default new LoginPage();
