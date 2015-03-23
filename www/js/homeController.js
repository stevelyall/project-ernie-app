angular.module('ernie-app.controllers')
    .controller('homeController', function($scope, $state, $ionicPopup) {

       window.localStorage.clear();

        if (window.localStorage['consentAccepted'] != 'true') {
            console.log("can't start survey");
            document.getElementById("startSurveyButton").className = "button button-light horizontal_center";
            $scope.startSurveyButtonOnClick = function () {
                $scope.needSetupAlert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Cannot Continue',
                        template: "Please review the study's consent information before continuing."
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                        $state.go("consent");
                    });
                };
                $scope.needSetupAlert().show();
            };
        } else {
            $scope.startSurveyButtonOnClick = function () {
                console.log("startsurveybutton clicked");
                // TODO alert with survey directions?
                $state.go('survey');
            }
        }


    });