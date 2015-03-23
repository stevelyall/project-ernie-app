angular.module('ernie-app.controllers')
    .controller('initController', function ($scope, $state) {
        //window.localStorage.clear();

        console.log(window.localStorage['licenseAccepted'] + " license accepted?");
        console.log(window.localStorage['privacyAccepted'] + " privacy accepted?");

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