angular.module('ernie-app.controllers')
    // TODO alert box doesn't return to disclaimer or privacy
    // TODO continue goes to home instead of privacy?
    .controller('disclaimerPrivacyController', function ($scope, $state, $ionicPopup, $stateParams) {

        $scope.disclaimerContinueButtonOnClick = function () {
            if (document.getElementById("disclaimerAcceptCheckbox").checked == true) {
                window.localStorage['licenseAccepted'] = 'true';
                console.log(window.localStorage['licenseAccepted'] + " license accepted?");
                $state.go('privacy');
            }
            else {
                // An alert dialog
                console.log("license agreement not accepted, showing alert");
                $scope.notAcceptedAlert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Cannot Continue',
                        template: 'Please accept the license agreement before continuing'
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                    });
                };
                $scope.notAcceptedAlert().show();
            }
        };

        $scope.privacyContinueButtonOnClick = function () {
            if (document.getElementById("privacyAcceptCheckbox").checked == true) {
                window.localStorage['privacyAccepted'] = 'true';
                console.log(window.localStorage['privacyAccepted'] + " privacy accepted?");
                $state.go('home');
            }
            else {
                // An alert dialog
                console.log("license agreement not accepted, showing alert");
                $scope.notAcceptedAlert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Cannot Continue',
                        template: 'Please review our privacy policy before continuing'
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                    });
                };
                $scope.notAcceptedAlert().show();
            }
        }
    });
