angular.module('ernie-app.controllers',[])

    .controller('surveyCtrl', function ($scope, $http) {

        $scope.testVar = {
            'name' : 'Hello there!'
        }

        $scope.questions;

        // create model for questions
        // use http service to get data from json file
        $http.get('js/questions.json').success(function(data) {
            $scope.questions = data.items;
            $scope.currentQuestion = $scope.questions[0];

        })

        // handler for next button
        $scope.nextClick = function() {
            console.log("next Button Clicked");
            console.log($scope.questions.toString());
            for (var i = 0; i<($scope.questions.length); i++) {
                console.log(i);
            }

            var button = document.getElementById('b1');
            console.log(button.innerHTML);

            // setclass
            button.setClass();
        }

        $scope.numSelect = function numSelect(num) {

        }

    });