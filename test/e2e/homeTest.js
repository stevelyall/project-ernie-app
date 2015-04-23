describe('begin survey from home', function () {

    it('click start survey, requires consent', function () {
        browser.get('http://localhost:8100/#/home');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/home');
        var beginButton = element(by.id('startSurveyButton'));
        beginButton.click();

        var popup = element(by.css('h3.popup-title.ng-binding'));
        expect(popup.getText()).toEqual('Cannot Continue');
        element(by.css('button.button.ng-binding.button-positive')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/consent');
    });

    it('accept consent', function () {
        var accept = element(by.id('acceptButton'));
        var scrollIntoView = function () {
            arguments[0].scrollIntoView();
        };
        browser.executeScript(scrollIntoView, accept.getWebElement());
        accept.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8100/#/participantId');
    });


});