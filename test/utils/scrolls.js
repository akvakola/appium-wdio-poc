export async function scrollDown() {
  await driver.execute("mobile: scroll", { direction: "down" });
}
export async function scrollUp() {
  await driver.execute("mobile: scroll", { direction: "up" });
}
export async function scrollToElementId(selector) {
  await driver.execute("mobile: scroll", {
    element: selector.elementID,
    direction: "down",
  });
}
