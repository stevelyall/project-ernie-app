/**
 * Controller for consent view. Displays the study's informed consent information for participants to review before they can use the app.
 * If the user accepts, continue to set-up process.
 * If the user declines, close the app.
 * After acceptance, the consent info can be viewed from the setup page.
 */

angular.module('ernie-app.controllers')
    .controller('consentController', function ($scope, $state, $ionicPopup) {
        console.log(window.localStorage['consentAccepted']);
        console.log(window.localStorage['demographicsCollected']);

        // consent already accepted, hide back and change accept to back
        if (window.localStorage['consentAccepted']) {
            document.getElementById("declineButton").style.display = "none";
            document.getElementById("acceptButton").innerHTML = "Back";
        }

        // continuing from consent screen
        $scope.consentAcceptButtonOnClick = function () {
            window.localStorage['consentAccepted'] = 'true';
            //if participant id and demographics have not been collected, do that
            if (window.localStorage['demographicsCollected'] == undefined) {
                $state.go('participantId');

            }
            else
                $state.go('setup');

            }

        // decline, show alert and close app
        $scope.consentDeclineButtonOnClick = function () {
            $scope.consentDeclinedAlert = function () {
                var alert = $ionicPopup.alert({
                    title: 'Cannot Continue',
                    template: "Should you decide to participate in the study in future, please run the app again."
                });
                alert.then(function (res) {
                    console.log('alert dismissed');
                    ionic.Platform.exitApp();
                    // TODO bug? reopening app crashes first time?
                });
            };
            $scope.consentDeclinedAlert().show();
        }


    });