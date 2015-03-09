angular.module('ernie-app.controllers', [])

    .directive('scaleDirective', function () {
        return {
            link: function (scope, element) {
                element.bind('click', function () {
                    scope.numSelect(element.attr('id'));
                });
            }
        }
    })

    // survey controller
    .controller('surveyCtrl', function ($scope, $http, $state) {

        // reference to response buttons
        $scope.buttons;

        // current question number
        $scope.questionIndex = 0;

        // index of selected response
        $scope.selectedResponse = -1;

        //console.log($scope.questions);


        // create model for questions
        // use http service to get data from json file
        $scope.questions = $http.get('js/questions.json').success(function (data) {
            $scope.questions = data.items;
        });

        // returns an array for ng-repeat to iterate through creating scale buttons
        $scope.provideScaleArray = function (num) {
            return new Array(num);
        }

        // handler for next button
        $scope.nextClick = function () {
            console.log("next Button Clicked");

            // save response
            $scope.questions[$scope.questionIndex].response = parseInt($scope.selectedResponse) + 1;
            console.log("response saved " + $scope.questions[$scope.questionIndex].response);

            // advance to next question
            $scope.selectedResponse = -1;
            $scope.questionIndex++;
            console.log("advancing to question " + ($scope.questionIndex + 1));

            // check if end of survey reached
            console.log($scope.questionIndex + 1 + " " + $scope.questions.length);
            if ($scope.questionIndex + 1 > $scope.questions.length) {
                console.log("End of survey");

                // if completed
                $state.go('afterSurvey');
                return;
            }

            // clear selections

            for (var i in $scope.buttons) {
                $scope.buttons[i].className = "itembutton button";
            }

            // hide next button
            document.getElementById("nextButton").style.display = "none";

        }


        // handler for response button clicks
        $scope.numSelect = function numSelect(num) {
            console.log(num + " passed to numSelect");
            $scope.buttons = new Array($scope.questions[$scope.questionIndex].scale);
            for (var i = 0; i < $scope.buttons.length; i++) {
                var button = document.getElementById(i);
                $scope.buttons[i] = button;
            }
            console.log($scope.buttons);
            var buttonPushed = document.getElementById(num);

            console.log("button " + buttonPushed.getAttribute("id") + " pushed");

            for (var i in $scope.buttons) {
                $scope.buttons[i].className = "itembutton button";
            }

            buttonPushed.className += (" selecteditembutton");
            $scope.selectedResponse = num;

            // make next button visible
            document.getElementById("nextButton").style.display = "";

        }
    })

    // after-survey page controller
    .controller('afterSurveyCtrl', function ($scope, $ionicPlatform, $state, $http) {

        // handler for send feedback button click
        $scope.sendFeedbackEmail = function () {
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

        var feedbackDone = function () {
            // hide feedback prompt and button, show new message
            document.getElementById("feedback-prompt").style.display = "none";
            document.getElementById("send-feedback-button").style.display = "none";
            document.getElementById("post-feedback-msg").style.display = "block";
        }
    })