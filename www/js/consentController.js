angular.module('ernie-app.controllers')
    .controller('consentController', function ($scope, $state, $ionicPopup) {
        $scope.consentAcceptButtonOnClick = function () {
            $state.go('home');
            // TODO instead of going home, begin setup
        };
        $scope.consentDeclineButtonOnClick = function () {
            $scope.consentDeclinedAlert = function () {
                var alert = $ionicPopup.alert({
                    title: 'Cannot Continue',
                    template: "Should you decide to participate in the study in future, please run the app again."
                });
                alert.then(function (res) {
                    console.log('alert dismissed');
                    ionic.Platform.exitApp();
                });
            };
            $scope.consentDeclinedAlert().show();
        }
    });