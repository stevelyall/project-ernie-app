angular.module('ernie-app.controllers', [])

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

        /**
         *  Hides feedback prompt and button, shows thank you message.
         */
        var feedbackDone = function () {
            document.getElementById("feedback-prompt").style.display = "none";
            document.getElementById("send-feedback-button").style.display = "none";
            document.getElementById("post-feedback-msg").style.display = "block";
        }
    })