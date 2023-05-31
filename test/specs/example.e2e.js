const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('Simple Geolocation Testing Using Chrome Modheader', () => {
    it('should redirect to the https://fr.norton.com', async () => {
        //await LoginPage.open();
        //console.log('');
        await browser.pause(5000);
        await browser.url('https://norton.com');
        await browser.pause(5000);
    })
})


