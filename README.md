# Simple Geolocation Testing in WDIO using Chrome Modheader

## Introduction

This repository is a simple WebdriverIO project that uses the Chrome Modheader package (there is also a Chrome Extension [here](https://chrome.google.com/webstore/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj)) to set a custom header that will make the Chrome browser think that you are in a different country. For the purposes of this example, I have used an IP address in France, but you can set it to anything you want using IPs from [this](https://lite.ip2location.com/) website.

## Setup Steps

1. Clone the repository:

```sh
git clone 