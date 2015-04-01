/**
 * Controller for main menu
 */
angular.module('ernie-app.controllers')
    .controller('homeController', function ($scope, $state, $ionicPopup) {

        console.log("license?" + window.localStorage['licenseAccepted']);
        console.log("privacy?" + window.localStorage['privacyAccepted']);
        console.log("consent?" + window.localStorage['consentAccepted']);
        // TODO view license and privacy in about section


        $scope.setupButtonOnClick = function () {
            $state.go('setup');
        };

        $scope.startSurveyButtonOnClick = function () {
            // ensure consent accepted before starting survey
            if (window.localStorage['consentAccepted'] != 'true') {
                console.log("can't start survey");
                $scope.needSetupAlert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Cannot Continue',
                        template: "Please review the study's consent information before continuing."
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                        $state.go('consent');
                    });
                };
                $scope.needSetupAlert().show();
            }

            // locations not defined, setup not complete
            if (window.localStorage['locsDefined'] == undefined) {
                console.log("locs not set");
                $scope.needSetupAlert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Cannot Continue',
                        template: "Please complete the set-up before continuing with the survey."
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                        $state.go('participantId');
                    });
                };
                $scope.needSetupAlert().show();
            }


                console.log("startsurveybutton clicked");


            $state.go('locationSelect');
        }
    });