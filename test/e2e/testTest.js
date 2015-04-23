// Describe a feature
describe('disclaimer', function () {

    it('opens to disclaimer screen', function () {
        var continueButton = element(by.id('continueButton'));
        expect(continueButton).not.toEqual(undefined);
    });

    it('continue without agreeing produces popup', function () {
        var continueButton = element(by.id('continueButton'));
        continueButton.click();
        var popup = element(by.css('h3.popup-title.ng-binding'));
        expect(popup.getText()).toEqual('Cannot Continue');
        element(by.css('button.button.ng-binding.button-positive')).click();
    });

    it('check disclaimer accept and continue', function () {
        element(by.id('disclaimerAcceptCheckbox')).click();
        var continueButton = element(by.id('continueButton'));
        continueButton.click();
        var title = element(by.css('h1.title'));
        //expect(title.getText()).toEqual('Privacy Policy');
        //TODO check pp statew
    })

});
