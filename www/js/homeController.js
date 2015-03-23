angular.module('ernie-app.controllers')
    .controller('homeController', function($scope, $state, $ionicPopup) {

        //document.addEventListener("deviceready", onDeviceReady, false);
        //function onDeviceReady() {
        //    console.log(device.cordova);
        //    console.log(device.model);
        //    console.log(device.name);
        //    console.log(device.uuid);
        //}
        console.log("license?" + window.localStorage['licenseAccepted']);
        console.log("privacy?" + window.localStorage['privacyAccepted']);
        console.log("consent?" + window.localStorage['consentAccepted']);
        // TODO view license and privacy in about section
            $scope.startSurveyButtonOnClick = function () {

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
                else {
                    $scope.startSurveyButtonOnClick = function () {
                        console.log("startsurveybutton clicked");
                        // TODO alert with survey directions?
                        $state.go('survey');
                    }
                }
            }
    });