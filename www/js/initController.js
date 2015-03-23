angular.module('ernie-app.controllers')
    .controller('initController', function ($scope, $state) {
        //window.localStorage.clear();

        console.log("license?" + window.localStorage['licenseAccepted']);
        console.log("privacy?" + window.localStorage['privacyAccepted']);
        console.log("consent?" + window.localStorage['consentAccepted']);

        if (window.localStorage['licenseAccepted'] == undefined) {
            console.log('license not accepted, going to disclaimer state');
            $state.go('disclaimer');
        }
        else if (window.localStorage['privacyAccepted'] == undefined) {
            console.log('license not accepted, going to disclaimer state');
            $state.go('privacy');
        }
        else {
            $state.go('home');
        }
    });