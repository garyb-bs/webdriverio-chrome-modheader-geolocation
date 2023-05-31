<p float="left">
  <img src="https://seeklogo.com/images/W/webdriverio-logo-7E0F1B52E5-seeklogo.com.png" width="200" height="100" title="Percy.IO">
  <img src="https://static.modheader.com/logo.png" width="100" height="50" title="Percy.IO2">
</p>

# Simple Geolocation Testing in WDIO using Chrome Modheader

## Introduction

This repository is a simple WebdriverIO project that uses the Chrome Modheader package (there is also a Chrome Extension [here](https://chrome.google.com/webstore/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj)) to set a custom header that will make the Chrome browser think that you are in a different country. For the purposes of this example, I have used an IP address in France, but you can set it to anything you want using IPs from [this](https://lite.ip2location.com/) website.

## Setup Steps

1. Clone the repository:

```sh
git clone https://github.com/garyb-bs/webdriverio-chrome-modheader-geolocation.git
```
2. Move into the directory and install the dependencies

```sh
cd webdriverio-chrome-modheader-geolocation && npm install
```
3. Run the test:

```sh
npm run wdio
```

## Notes

The header is set in the configuration [file](https://github.com/garyb-bs/webdriverio-chrome-modheader-geolocation/blob/main/wdio.conf.js) in the before method so that it is set ahead of any tests being run. You also need to define an instance of it, and add the extension to the Google Chrome capabilities

```js
const chromeModheader = require('chrome-modheader');

capabilities: [{
    // capabilities for local browser web tests
    browserName: 'chrome', // or "firefox", "microsoftedge", "safari"
    'goog:chromeOptions': {
        extensions: [chromeModheader.getEncodedExtension()]
      }
}],

before: function (capabilities, specs) {
        browser.url(chromeModheader.getAddHeaderUrl('X-Forwarded-For', '103.153.6.0'));
}
```
We are using the "X-Forwarded-For" header to set our location and we are currently using an IP set to France. But this can be changed. We can also expand this if we need to test multiple websites by storing an array or map of IP addresses for each country and setting this on the fly in our tests or in a beforeEach method. It is highly adaptable and this is just a simple example of it in action.

I have added a pause before and after the browser.url() command in our test to give it time to pick up the header and to make sure we have time to see the page is the correct one, but this is obviously not good practice for your actual tests.