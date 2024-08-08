// This function checks the screen for visual differences and ensures they are minimal.
export async function checkScreen(name) {
  // Perform a screen check with the given name and return all comparison data.
  const result = await driver.checkScreen(name, {
    returnAllCompareData: true,
  });
  // Assert that the mismatch percentage is less than 1%.
  await expect(result.misMatchPercentage).toBeLessThan(1);
}
