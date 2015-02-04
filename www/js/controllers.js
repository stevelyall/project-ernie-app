angular.module('ernie-app.controllers',[])

    .controller('surveyCtrl', function ($scope, $http) {

        $scope.questions;

        // create model for questions
        // use http service to get data from json file
        $http.get('js/questions.json').success(function(data) {
            $scope.questions = data.items;
            $scope.currentQuestion = $scope.questions[0];
        })

        // get response button elements
        var buttons = [];
        for (var i = 0; i < 10; i++) {
            var button = document.getElementById(i);
            buttons[i] = button;
        }

        // index of selected resposne
        $scope.selectedResponse = -1;

        // handler for next button
        $scope.nextClick = function() {
            console.log("next Button Clicked");
            console.log($scope.questions.toString());
            for (var i = 0; i<($scope.questions.length); i++) {
                console.log(i);
            }
        }

        $scope.numSelect = function numSelect(num) {
            var buttonPushed = document.getElementById(num);
            console.log(buttonPushed.innerHTML);

            for (var i in buttons) {
                buttons[i].className = "itembutton button";
            }

            buttonPushed.className += (" selecteditembutton");
            selectedResponse = num;

            document.getElementById("nextButton").style.display = "";

        }
    });