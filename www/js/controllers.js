angular.module('ernie-app.controllers',[])

    .controller('surveyCtrl', function ($scope, $http) {

        // current question number
        var questionNum = 0;

        // holds current question data
        $scope.currentQuestion;

        // index of selected response
        $scope.selectedResponse = -1;

        // create model for questions
        // use http service to get data from json file
        $http.get('js/questions.json').success(function(data) {
            $scope.questions = data.items;
            $scope.getQuestion(questionNum);
        })

        // get a new question at sepcified index from the question list
        $scope.getQuestion = function(index) {
            $scope.currentQuestion = $scope.questions[index];
        }

        // get response button elements
        var buttons = [];
        for (var i = 0; i < 10; i++) {
            var button = document.getElementById(i);
            buttons[i] = button;
        }


        // handler for next button
        $scope.nextClick = function() {
            console.log("next Button Clicked");

            // save response
            // $scope.currentQuestion.response = selectedResponse;
            console.log("response saved " + $scope.currentQuestion.response);

            // advance to next question
            $scope.selectedResponse = -1;
            questionNum++;
            $scope.getQuestion(questionNum);

            // clear selections
            for (var i in buttons) {
                buttons[i].className = "itembutton button";
            }

            // hide next button
            document.getElementById("nextButton").style.display = "none";
        }

        $scope.numSelect = function numSelect(num) {
            var buttonPushed = document.getElementById(num);
            console.log(buttonPushed.innerHTML);

            for (var i in buttons) {
                buttons[i].className = "itembutton button";
            }

            buttonPushed.className += (" selecteditembutton");
            selectedResponse = num;

            // make next button visible
            document.getElementById("nextButton").style.display = "";

        }
    });