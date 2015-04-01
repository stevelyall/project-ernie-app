/**
 * Controls initial setup view where users define a set of locations where they spend their time. Ensures input is non-null, saves to local storage.
 */

angular.module('ernie-app.controllers')
    .controller('locationDefineController', function ($scope, $state, $ionicPopup) {

        $scope.locationDefineSubmitButtonOnClick = function () {
            console.log("clicked");
            // get values
            for (var i = 1; i < 5; i++) {
                console.log(i);
                var value = document.getElementById("loc" + i + "Input").value;
                if (value != undefined && value != "") {
                    window.localStorage['loc' + i] = document.getElementById("loc" + i + "Input").value;
                } else {
                    $scope.alert = function () {
                        var alert = $ionicPopup.alert({
                            title: 'Invalid Location ' + i,
                            template: "You must enter a name for all four locations."
                        });
                        alert.then(function (res) {
                            console.log('alert dismissed');

                        });
                    };
                    $scope.alert().show();

                }

            }

            window.localStorage['locsDefined'] = 'true';
            // go to main menu
            $state.go('home');

        };

    });