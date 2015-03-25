/**
 * Controller for disclaimer/license and privacy policy views.
 * Checks that these items are accepted by user before continuing, saves in local storage.
 */

angular.module('ernie-app.controllers')
    .controller('disclaimerPrivacyController', function ($scope, $state, $ionicPopup) {

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
