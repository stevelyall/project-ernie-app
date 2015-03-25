/**
 * Controller for participant ID entry. Participant enters ID assigned by research team.
 * Device unique identifier is used otherwise.
 */

angular.module('ernie-app')
    .controller('participantIdController', function ($scope, $state, $ionicPopup, $cordovaDevice) {

        // hide text box
        document.getElementById("participantIdFromUser").style.display = "none";


        // display text box for the user to provide their Id
        var checkButtons = function () {
            if (document.getElementById("participantIdButton").checked) {
                document.getElementById("participantIdFromUser").style.display = "block";
            }
            else {
                document.getElementById("participantIdFromUser").style.display = "none";
            }
        }
        document.getElementById("participantIdButton").addEventListener("click", checkButtons);
        document.getElementById("noParticipantIdButton").addEventListener("click", checkButtons);


        $scope.participantIdSubmitButtonOnClick = function () {
            var participantId;

            // use UUID for device, provided by cordova device
            if (document.getElementById("noParticipantIdButton").checked) {
                document.addEventListener("deviceready", function () {
                    participantId = $cordovaDevice.getUUID();
                });
            }
            else {
                // use user provided id
                participantId = document.getElementById("participantIdInput").value;

                // handle participant id left blank
                if (participantId.length < 1) {
                    $scope.alert = function () {
                        var alert = $ionicPopup.alert({
                            title: 'Cannot be blank',
                            template: "Please enter your participant ID."
                        });
                        alert.then(function (res) {
                            console.log('alert dismissed');
                            return;
                        });
                    };
                    $scope.alert().show();
                }
            }
            window.localStorage['participantId'] = participantId;
            console.log("participant Id is: " + window.localStorage['participantId']);
            $state.go('demographics');
        }
    });