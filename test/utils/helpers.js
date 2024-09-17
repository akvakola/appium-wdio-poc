import { expect } from "@wdio/globals";

export async function tapOn(element) {
  await element.waitForDisplayed({ timeout: 20000 });
  await element.click();
}
export async function type(element, text) {
  await element.waitForDisplayed({ timeout: 20000 });
  await element.addValue(text);
}
export async function shouldBeDisplayed(element) {
  await element.waitForDisplayed({ timeout: 30000 });
  await expect(element).toBeDisplayed();
}
