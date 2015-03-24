angular.module('ernie-app.controllers')
    .controller('setupController', function ($scope, $state, $ionicPopup) {

        // view consent information when consent button is clicked
        $scope.consentButtonOnClick = function () {
            console.log("consent button click");
            $state.go('consent');
        }

        // TODO schedule

        // TODO locations

        // TODO notifications
    });