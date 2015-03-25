angular.module('ernie-app')
    .controller('participantIdController', function ($scope, $state, $ionicPopup, $cordovaDevice) {

        document.getElementById("participantIdFromUser").style.display = "none";

        var checkButtons = function () {
            //   display text box to specify participant id
            if (document.getElementById("participantIdButton").checked) {
                document.getElementById("participantIdFromUser").style.display = "block";
            }
            else {
                document.getElementById("participantIdFromUser").style.display = "none";
            }
        }

        document.getElementById("participantIdButton").addEventListener("click", checkButtons);
        document.getElementById("noParticipantIdButton").addEventListener("click", checkButtons);


        $scope.participantIdSubmitButtonOnClick = function() {
            var participantId;
            if (document.getElementById("noParticipantIdButton").checked) {
                document.addEventListener("deviceready", function () {
                    participantId = $cordovaDevice.getUUID();
                });
            }
            else {
                participantId = document.getElementById("participantIdInput").value;
console.log(participantId);
                // participant id left blank?
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