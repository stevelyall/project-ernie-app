angular.module('ernie-app.controllers')
    .controller('disclaimerPrivacyController', function ($scope, $state, $ionicPopup) {

        if (window.localStorage['licenseAccepted'] == 'true') {
            $state.go('privacy');
        }
        if (window.localStorage['privacyAccepted'] == 'true') {
            $state.go('survey');
        }

        $scope.disclaimerContinueButtonOnClick = function () {
            console.log("agree is checked? " + document.getElementById("disclaimerAcceptCheckbox").checked);
            if (document.getElementById("disclaimerAcceptCheckbox").checked == true) {
                window.localStorage['licenseAccepted'] = 'true';
                $state.go('privacy');
            }
            else {
                // An alert dialog
                console.log("license agreement not accepted, showing alert");
                $scope.notAcceptedAlert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Cannot Continue',
                        template: 'Please accept the license agreement before continuing'
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                    });
                };
                $scope.notAcceptedAlert().show();
            }
        };

        $scope.privacyContinueButtonOnClick = function () {
            console.log("agree is checked? " + document.getElementById("privacyAcceptCheckbox").checked);
            if (document.getElementById("privacyAcceptCheckbox").checked == true) {
                $scope.privacyAcceoted = true;
                $state.go('survey');
            }
            else {
                // An alert dialog
                console.log("license agreement not accepted, showing alert");
                $scope.notAcceptedAlert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Cannot Continue',
                        template: 'Please review our privacy policy before continuing'
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                    });
                };
                $scope.notAcceptedAlert().show();
            }
        }
    });
