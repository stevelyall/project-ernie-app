/**
 * Controller for participant ID entry. Participant enters ID assigned by research team.
 * Device unique identifier is used otherwise.
 */

angular.module('ernie-app')
    .controller('participantIdController', function ($rootScope, $scope, $state, $ionicPopup, $http, $cordovaDevice) {
        // create model for participant
        $http.get('js/participantModel.json').success(function (data) {
            $rootScope.participant = data.participant;
        });

        $scope.participantIDForm = {};

        $scope.participantIdSubmitButtonOnClick = function () {

            // not given an id? use UUID for device, provided by cordova device
            if (document.getElementById("noParticipantIdButton").checked) {
                console.log("no participant id");
                document.addEventListener("deviceready", function () {
                    console.log("device id is " + $cordovaDevice.getUUID());
                    $rootScope.participant.participantId = $cordovaDevice.getUUID();
                });
            }


            // handle participant id left blank
            if ($scope.participantIDForm.$invalid) {
                console.log("form invalid");
                $ionicPopup.alert({
                    title: 'Invalid Participant ID',
                    template: "Please enter your participant ID.",
                    okText: "Try Again"
                });
            }
            else {
                console.log("participant Id is: " + $rootScope.participant.participantId);
                //window.localStorage['participantId'] = $scope.participant.participantId;
                //console.log("participant Id stored in local storage is: " + window.localStorage['participantId']);
                $state.go('demographics');
            }
        }
    });