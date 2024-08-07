### Types of Selectors

1. **CSS Selectors**
2. **XPath Selectors**
3. **ID Selectors**
4. **Class Name Selectors**
5. **Accessibility ID Selectors**
6. **Tag Name Selectors**
7. **Link Text Selectors**
8. **Partial Link Text Selectors**
9. **Android UIAutomator Selectors (specific to Android)**
10. **iOS Predicate String Selectors (specific to iOS)**
11. **iOS Class Chain Selectors (specific to iOS)**

### Syntax and Examples

1. **CSS Selectors**

   - **Syntax**: `$('css selector')`
   - **Example**: `$('.btn-primary')`

2. **XPath Selectors**

   - **Syntax**: `$('//tagname[@attribute="value"]')`
   - **Example**: `$('//android.widget.TextView[@text="Get Started"]')`

3. **ID Selectors**

   - **Syntax**: `$('#elementId')`
   - **Example**: `$('#submit-button')`

4. **Class Name Selectors**

   - **Syntax**: `$('.className')`
   - **Example**: `$('.main-header')`

5. **Accessibility ID Selectors**

   - **Syntax**: `$('~accessibilityId')`
   - **Example**: `$('~Get Started')`

6. **Tag Name Selectors**

   - **Syntax**: `$('tagname')`
   - **Example**: `$('button')`

7. **Link Text Selectors**

   - **Syntax**: `$('=link text')`
   - **Example**: `$('=Sign In')`

8. **Partial Link Text Selectors**

   - **Syntax**: `$('*=partial link text')`
   - **Example**: `$('*=Sign')`

9. **Android UIAutomator Selectors (Android-specific)**

   - **Syntax**: `$('android=selector')`
   - **Example**: `$('android=new UiSelector().text("Get Started")')`

10. **iOS Predicate String Selectors (iOS-specific)**

    - **Syntax**: `$('ios=predicate string')`
    - **Example**: `$('ios=label == "Get Started" AND type == "XCUIElementTypeButton"')`

11. **iOS Class Chain Selectors (iOS-specific)**
    - **Syntax**: `$('ios=class chain')`
    - **Example**: `$('ios=**/XCUIElementTypeButton[`label == "Get Started"`]')`
