## Error and Solution for WebdriverIO Session Creation Failures

### Error:

##### @wdio/runner: Error: Failed to create session.[0-0] Unable to connect to "http://127.0.0.1:49671/", make sure browser driver is running on that address. [0-0] It seems like the service failed to start or is rejecting any connections

### Solution:

```sh
lsof -i :4723
kill -9 {processnumber}

```
