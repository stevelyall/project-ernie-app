// Describe a feature
describe('disclaimer', function () {

    it('opens to disclaimer screen', function () {
        var continueButton = element(by.id('continueButton'));
        expect(continueButton).not.toEqual(undefined);
    });

    it('continue without agreeing produces popup', function () {
        var continueButton = element(by.id('disclaimerContinueButton'));
        continueButton.click();
        var popup = element(by.css('h3.popup-title.ng-binding'));
        expect(popup.getText()).toEqual('Cannot Continue');
        element(by.css('button.button.ng-binding.button-positive')).click();
    });

    it('check disclaimer accept and continue to privacy', function () {
        element(by.id('disclaimerAcceptCheckbox')).click();
        var continueButton = element(by.id('disclaimerContinueButton'));
        continueButton.click();
        var title = element(by.css('h1.title'));
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/privacyPolicy');
    });

    it('privacy continue without agreeing produces popup', function () {
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/privacyPolicy');
        var continueButton = element(by.id('privacyContinueButton'));

        var scrollIntoView = function () {
            arguments[0].scrollIntoView();
        };
        browser.executeScript(scrollIntoView, continueButton.getWebElement());


        continueButton.click();
        var popup = element(by.css('h3.popup-title.ng-binding'));
        expect(popup.getText()).toEqual('Cannot Continue');
        element(by.css('button.button.ng-binding.button-positive')).click();
    });

    it('check privacy accept and continue to main', function () {
        element(by.id('privacyAcceptCheckbox')).click();
        var continueButton = element(by.id('privacyContinueButton'));
        continueButton.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/home');
    });


});
