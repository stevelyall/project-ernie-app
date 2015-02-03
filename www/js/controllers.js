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

            for (var i = 0; i<$scope.questions.items.length; i++) {
                console.log(i);
            }

        }

    });