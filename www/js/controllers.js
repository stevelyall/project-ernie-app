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

    // post-survey controller
    .controller('afterSurveyCtrl', function($scope, $cordovaEmailComposer) {
        $scope.startSendFeedback = function() {

            $cordovaEmailComposer.isAvailable().then(function() {
                // is available
            }, function () {
                // not available
            });

            var email = {
                to: 'max@mustermann.de',
                cc: 'erika@mustermann.de',
                bcc: ['john@doe.com', 'jane@doe.com'],
                attachments: [
                    'file://img/logo.png',
                    'res://icon.png',
                    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
                    'file://README.pdf'
                ],
                subject: 'Cordova Icons',
                body: 'How are you? Nice greetings from Leipzig',
                isHtml: true
            };

            $cordovaEmailComposer.open(email).then(null, function () {
                // user cancelled email
            });
        }
    });