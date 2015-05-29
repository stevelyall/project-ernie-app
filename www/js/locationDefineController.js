/**
 * Controls initial setup view where users define a set of locations where they spend their time. Ensures input is non-null, saves to local storage.
 */

angular.module('ernie-app.controllers')
    .controller('locationDefineController', function ($scope, $http, $state, $ionicPopup) {

        // create model for locations
        $http.get('js/participantModel.json').success(function (data) {
            $scope.locations = data.locations;
        });

        $scope.locationDefineSubmitButtonOnClick = function () {

            if ($scope.locationdefineform.$invalid) {
                $ionicPopup.alert({
                    title: 'Invalid Locations',
                    template: "You must enter a name for all four locations.",
                    okText: "Try Again"
                });
            }

            localStorage.setItem('locations', JSON.stringify($scope.locations));
            window.localStorage['numSurveysCompleted'] = '0';
            window.localStorage['locsDefined'] = 'true';

            console.log("localstorage now contains:");
            var retrieved = JSON.parse(localStorage.getItem('locations'));
            console.log(retrieved);

            // go to main menu
            $state.go('home');

        };

    });