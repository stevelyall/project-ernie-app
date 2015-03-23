angular.module('ernie-app.controllers')
    .controller('homeController', function($scope, $state, $ionicPopup) {


        $scope.startSurveyButtonOnClick = function() {
            console.log("startsurveybuttononclick");
            // TODO alert with survey directions?
            $state.go('survey');
        }
    });