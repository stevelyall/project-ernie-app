/**
 * Controller for demographic information collection view.
 */

angular.module('ernie-app.controllers')
    .controller('demographicsController', function ($scope, $state, $ionicPopup, $ionicModal) {

        //hide other text box
        document.getElementById("otherEthnicityTextBox").style.display = "none";

        // display text box if other is selected
        document.getElementById("ethnicitySelect").onchange = function () {
            console.log("selection changed");
            if (this.value == "Other") {
                document.getElementById("otherEthnicityTextBox").style.display = "block";
            }
            else {
                document.getElementById("otherEthnicityTextBox").style.display = "none";
            }

        }

        $scope.demographicsContinueButtonOnClick = function () {
            var age = document.getElementById("ageInput").value;
            var gender = document.getElementById("genderInput").value;
            var ethnicitySelected = document.getElementById("ethnicitySelect").value;
            var otherEthnicity = document.getElementById("otherEthnicityTextBox").value;

            // age left blank, show alert
            if (age == undefined || age < 1) {
                $scope.alert = function () {
                    var alert = $ionicPopup.alert({
                        title: 'Age Incorrect',
                        template: "Please enter your age in years. ex) 24"
                    });
                    alert.then(function (res) {
                        console.log('alert dismissed');
                        return;
                    });
                };
                $scope.alert().show();
            }
            else {
                // store in local storage
                window.localStorage['age'] = age;
                window.localStorage['gender'] = gender;
                window.localStorage['ethnicitySelected'] = ethnicitySelected;
                window.localStorage['otherEthnicity'] = otherEthnicity;
                window.localStorage['demographicsCollected'] = "true";
                console.log(window.localStorage['age'] + "\n" + window.localStorage['gender'] + "\n" + window.localStorage['ethnicitySelected'] + "\n" + window.localStorage['otherEthnicity']);

                // TODO where should this really go? Set locations
                $state.go('home');
            }
        }

    });