/**
 * Controller for demographic information collection view.
 */

angular.module('ernie-app.controllers')
    .controller('demographicsController', function ($rootScope, $scope, $state, $ionicPopup) {

        $scope.demographicsContinueButtonOnClick = function () {

            if ($scope.demographicform.$invalid) {
                $ionicPopup.alert({
                    title: "Age Incorrect",
                    template: "Please enter your age in years. ex) 24",
                    okText: "Try Again"
                });
            }
            else {
                console.log($rootScope.participant);
                localStorage.setItem('participant', JSON.stringify($rootScope.participant));

                console.log("localstorage now contains:");
                var retrieved = JSON.parse(localStorage.getItem('participant'));
                console.log(retrieved);

                //go to location definition state
                $state.go('locationDefine');
            }
        }

    });