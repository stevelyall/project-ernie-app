/**
 * Controller for setup menu.
 */

angular.module('ernie-app.controllers')
    .controller('setupController', function ($scope, $state, $ionicPopup) {

        // view consent information when consent button is clicked
        $scope.consentButtonOnClick = function () {
            $state.go('consent');
        };

        // TODO schedule


        // TODO notifications
    });