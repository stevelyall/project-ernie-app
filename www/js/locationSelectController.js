/**
 * Controls selection of the current location before completing a survey.
 */

angular.module('ernie-app.controllers')
    .controller('locationSelectController', function ($scope, $state, $ionicPopup) {
        console.log("surveys completed: " + window.localStorage['numSurveysCompleted']);

        $scope.locations = JSON.parse(localStorage.getItem('locations'));
        console.log("retrieved from local storage:");
        console.log($scope.locations);

        $scope.selectedLocation = "";

        $scope.locationSelectSubmitButtonOnClick = function () {

            if ($scope.selectlocationform.$invalid) {
                $ionicPopup.alert({
                    title: "Invalid Selection",
                    template: "You must choose one of your locations from the drop-down list.",
                    okText: "Try Again"
                });
            }
            else {
                window.localStorage['location'] = $scope.selectedLocation;
                console.log("location selected: " + window.localStorage['location']);

                // record starting timestamp
                window.localStorage['startTime'] = new Date().toUTCString();
                console.log("survey start time: " + window.localStorage['startTime']);

                // start survey
                $state.go('survey');
            }


        };

    });