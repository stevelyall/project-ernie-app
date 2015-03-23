angular.module('ernie-app.controllers')
    .controller('consentController', function ($scope, $state, $ionicPopup, $stateProvider) {
        $scope.consentAcceptButtonOnClick = function () {
            window.localStorage['consentAccepted'] = 'true';
            $state.go('home');
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