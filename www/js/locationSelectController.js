/**
 * Controls selection of the current location before completing a survey.
 */

angular.module('ernie-app.controllers')
    .controller('locationSelectController', function ($scope, $state, $ionicPopup) {
        for (var i = 1; i < 5; i++) {
            document.getElementById("loc" + i).innerHTML = window.localStorage["loc" + i];
            document.getElementById("loc" + i).value = window.localStorage["loc" + i];
        }

        $scope.locationSelectSubmitButtonOnClick = function () {
            var currentLoc = document.getElementById("locSelect").value;
            if (currentLoc != "Please Choose") {
                window.localStorage['location'] = currentLoc;
                console.log("location selected " + window.localStorage['location']);

                // record starting timestamp
                window.localStorage['startTime'] = new Date().toUTCString();
                console.log(window.localStorage['startTime']);

                // start survey
                $state.go('survey');
            } else {
                $scope.alert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Invalid Location',
                        template: "You must choose one of your specified locations from the drop-down list."
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');

                    });
                };
                $scope.alert().show();

            }


        };

    });