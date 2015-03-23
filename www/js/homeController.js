angular.module('ernie-app.controllers')
    .controller('homeController', function($scope, $state, $ionicPopup) {

        if (window.localStorage['licenseAccepted'] == 'true' && window.localStorage['privacyAccepted'] == 'true') {
            document.getElementById("startSurveyButton").style.display = "block";
        }

        $scope.startSurveyButtonOnClick = function() {
            console.log("startsurveybuttononclick");
            // TODO alert with survey directions?
            $state.go('survey');
        }
    });