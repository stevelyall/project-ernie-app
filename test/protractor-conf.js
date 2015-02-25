exports.config = {
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        'e2e/*.js'
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    },
    allScriptsTimeout: 20000,
    onPrepare: function(){
        browser.driver.get('http://localhost:3000');
    }
};