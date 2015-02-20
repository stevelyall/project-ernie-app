angular.module('ernie-app.controllers',[])

    // survey controller
    .controller('surveyCtrl', function ($scope, $http, $state) {
        // current question number
        var questionIndex = 0;

        // questions retrieved with http service
        $scope.questions;

        // holds current question data
        $scope.currentQuestion;

        // index of selected response
        $scope.selectedResponse = -1;

        // create model for questions
        // use http service to get data from json file
        $http.get('js/questions.json').success(function(data) {
            $scope.questions = data.items;
            $scope.getQuestion(questionIndex);
        })

        // get a new question at specified index from the question list
        $scope.getQuestion = function(index) {
            $scope.currentQuestion = $scope.questions[index];
        }

        // handler for next button
        $scope.nextClick = function() {
            console.log("next Button Clicked");

            // save response
            $scope.currentQuestion.response = parseInt(selectedResponse) + 1;
            console.log("response saved " + $scope.currentQuestion.response);

            // advance to next question
            $scope.selectedResponse = -1;
            questionIndex++;
            console.log("advancing to question " + (questionIndex+1));
            $scope.getQuestion(questionIndex);

            // check if end of survey reached
            console.log(questionIndex+1 + " " + $scope.questions.length);
            if (questionIndex+1 > $scope.questions.length) {
                console.log("End of survey");

                // if completed
                $state.go('afterSurvey');
                return;
            }

            // clear selections
            for (var i in buttons) {
                buttons[i].className = "itembutton button";
            }

            // hide next button
            document.getElementById("nextButton").style.display = "none";
        }

        .directive('buttonBuilder', function($scope, $compile) {
                return {
                    template: '<div>test</div>',
                    restrict: 'E',
                    link: function(rescope, elm){
                        console.log(elm);
                        elm.after($compile('<div></div>')($scope));
                    }
                }
            })

        // get response button elements
        var buttons = [];
        for (var i = 0; i < 10; i++) {
            var button = document.getElementById(i);
            buttons[i] = button;
        }

        // handler for response button clicks
        $scope.numSelect = function numSelect(num) {
            var buttonPushed = document.getElementById(num);
            //console.log(buttonPushed.innerHTML);

            for (var i in buttons) {
                buttons[i].className = "itembutton button";
            }

            buttonPushed.className += (" selecteditembutton");
            selectedResponse = num;

            // make next button visible
            document.getElementById("nextButton").style.display = "";

        }
    })

    // after-survey page controller
    .controller('afterSurveyCtrl', function($scope) {

        // handler for send feedback button click
        $scope.sendFeedbackEmail = function() {
            console.log("feedback button clicked");
            // check if email plugin exists
            if (window.plugins && window.plugins.emailComposer) {
                var subject = "ERA Application Feedback";
                var body = "";
                var to = ["myeraproject@gmail.com"];

                // compose email
                window.plugins.emailComposer.showEmailComposerWithCallback(feedbackDone(), subject, body, to, null, null, true, null, null);
            }
        }

        var feedbackDone = function() {
            // hide feedback prompt and button, show new message
            document.getElementById("feedback-prompt").style.display = "none";
            document.getElementById("send-feedback-button").style.display = "none";
            document.getElementById("post-feedback-msg").style.display = "block";
        }
    });