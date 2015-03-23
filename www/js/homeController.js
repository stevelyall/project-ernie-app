angular.module('ernie-app.controllers')
    .controller('homeController', function($scope, $state, $ionicPopup) {

        //document.addEventListener("deviceready", onDeviceReady, false);
        //function onDeviceReady() {
        //    console.log(device.cordova);
        //    console.log(device.model);
        //    console.log(device.name);
        //    console.log(device.uuid);
        //}

        $scope.startSurveyButtonOnClick = function() {
            console.log("startsurveybuttononclick");
            // TODO alert with survey directions?
            $state.go('survey');
        }
    });