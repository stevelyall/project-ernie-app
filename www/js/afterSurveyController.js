angular.module('ernie-app.controllers')
    // after-survey page controller
    .controller('afterSurveyController', function ($scope, $ionicPlatform, $state, $http) {
        {

            var response = {
                participantId: window.localStorage['participantId'],
                age: window.localStorage['age'],
                gender: window.localStorage['gender'],
                ethnicity: window.localStorage['ethnicity'],
                responseNum: 1, // TODO count responses
                startTime: "", // TODO timestamps
                endTime: "",
                location: "" // TODO location
            };

            for (var i = 1; i < 15; i++) {
                console.log("q" + i + " response is: " + window.localStorage["q" + i]);

                response["q" + i + "_response"] = window.localStorage["q" + i];
                console.log(response["q" + i + "_response"]);

            }

            var response = {
                "q1": window.localStorage
            };
            var postResponse = function () {
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