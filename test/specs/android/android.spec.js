//Always add .js at the end of the import or the tests are going to fail
import { default as homePage } from "../../screenobjects/android/home.page.js";

// EXAMPLE
describe("Android tests", () => {
  it("Verify android il loaded", async () => {
    // const accessibilityID = $("~Accessibility");
    // await expect(accessibilityID).toBeDisplayed();
    // // OR PAGE OBJECT MODEL
    // await homePage.accessibilityButton.click();
  });
});
