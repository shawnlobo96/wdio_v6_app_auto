describe('The test', () => {
    it('shall type in the email', () => {
        browser.switchContext("WEBVIEW_com.oneclickbusiness.mobile")
        const footer = $('.footer');
        footer.waitForDisplayed();
        const getStartedButton = footer.$('.button');
        getStartedButton.click();
        browser.pause(3000)
        const emailInput = $('#email .native-input');
        emailInput.waitForDisplayed();
        emailInput.setValue("test@example.com")
        browser.pause(10000)
    });
});
