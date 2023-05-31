describe('Simple Geolocation Testing Using Chrome Modheader', () => {
    it('should redirect to the https://fr.norton.com', async () => {

        await browser.pause(5000);
        await browser.url('https://norton.com');
        await browser.pause(5000);
    })
})


