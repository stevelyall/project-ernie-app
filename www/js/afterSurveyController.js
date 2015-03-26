/**
 * After survey state gathers the data to be sent to the server, sends it, then prompts the user to provide feedback by email.
 */
angular.module('ernie-app.controllers')
    .controller('afterSurveyController', function ($scope, $ionicPlatform, $state, $http) {
        {
            // get response data from local storage
            var response = {
                participantId: window.localStorage['participantId'],
                age: window.localStorage['age'],
                gender: window.localStorage['gender'],
                ethnicity: window.localStorage['ethnicity'],
                responseNum: 1, // TODO count responses
                startTime: window.localStorage['startTime'], // TODO timestamps
                endTime: window.localStorage['endTime'],
                location: window.localStorage['location'] // TODO location
            };
            for (var i = 1; i < 15; i++) {
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
             *  Hides feedback prompt and button, shows thank you message.
             */
            var feedbackDone = function () {
                document.getElementById("feedback-prompt").style.display = "none";
                document.getElementById("send-feedback-button").style.display = "none";
                document.getElementById("post-feedback-msg").style.display = "block";
            }
        }
    });