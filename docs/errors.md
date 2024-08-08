## Error and Solution for WebdriverIO Session Creation Failures

### Error:

##### @wdio/runner: Error: Failed to create session.[0-0] Unable to connect to "http://127.0.0.1:49671/", make sure browser driver is running on that address. [0-0] It seems like the service failed to start or is rejecting any connections

### Solution:

```sh
lsof -i :4723
kill -9 {processnumber}

```

##### Error: Unable to load spec files quite likely because they rely on `browser` object that is not fully initialized.`browser` object has only `capabilities` and some flags like `isMobile`.Helper files that use other `browser` commands have to be moved to `before` hook.Error: Error: Cannot find module '/Users/viktornovacki/Appium/POC/appium-wdio-poc/test/utils/visual-regression' imported from /Users/viktornovacki/Appium/POC/appium-wdio-poc/test/specs/ios/ios.spec.js

### Solution:

```
Missing .js extension in an import statement.
```
