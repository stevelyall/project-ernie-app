/**
 *  Controller for initial state, checks if license and privacy have been accepted, directs to appropriate view.
 */

angular.module('ernie-app.controllers')
    .controller('initController', function ($scope, $state) {

        console.log("license?" + window.localStorage['licenseAccepted']);
        console.log("privacy?" + window.localStorage['privacyAccepted']);
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