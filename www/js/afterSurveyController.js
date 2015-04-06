/**
 * After survey state gathers the data to be sent to the server, sends it, then prompts the user to provide feedback by email.
 */
angular.module('ernie-app.controllers')
    .controller('afterSurveyController', function ($scope, $ionicPlatform, $state, $http) {
        {
            // record finish timestamp
            window.localStorage['endTime'] = new Date().toUTCString();
            console.log(window.localStorage['endTime']);

            var surveyNum = parseInt(window.localStorage['numSurveysCompleted']) + 1;
            console.log("survey #" + surveyNum + " completed");

            // increment survey counter
            window.localStorage['numSurveysCompleted'] = (surveyNum).toString();
            console.log("surveys completed: " + window.localStorage['numSurveysCompleted']);

            // hide exit button
            document.getElementById("exitButton").style.display = "none";

            // get response data from local storage
            var response = {
                participantId: window.localStorage['participantId'],
                age: window.localStorage['age'],
                gender: window.localStorage['gender'],
                ethnicity: window.localStorage['ethnicity'],
                responseNum: surveyNum.toString(),
                startTime: window.localStorage['startTime'],
                endTime: window.localStorage['endTime'],
                location: window.localStorage['location']
            };
            for (var i = 1; i < 19; i++) {
                console.log("\nq" + i + "response: " + window.localStorage["q" + i]);
                response["q" + i + "response"] = window.localStorage["q" + i];
            }


            /**
             * POST response and participant data to server as JSON string.
             */
            var postResponse = function () {
                response = JSON.stringify(response);
                console.log("POST " + response);

                var request = $http({
                    method: "post",
                    url: "http://api.eraproject.ca/collect-response.php",
                    data: response,
                    headers: {'Content-Type': 'application/json'}
                });

                request.success(function (data) {
                    console.log("post succeess" + data + "|");
                });

                request.error(function () {
                    console.log("post error");
                });

            };
            postResponse();

            /**
             * Handler for feedback button click.
             * Uses Email Composer with Attachments Plugin:
             * https://github.com/jcjee/email-composer
             */
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
            };

            /**
             *  Hides feedback prompt and button, shows thank you message and exit button.
             */
            var feedbackDone = function () {
                document.getElementById("feedback-prompt").style.display = "none";
                document.getElementById("send-feedback-button").style.display = "none";
                document.getElementById("post-feedback-msg").style.display = "block";
                document.getElementById("exitButton").style.display = "block";


            };

            /**
             * Exit button, becomes visible after sending app feedback.
             */
            $scope.exitButtonOnClick = function () {
                ionic.Platform.exitApp();
            }
        }
    });