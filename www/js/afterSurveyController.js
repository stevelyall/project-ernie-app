angular.module('ernie-app.controllers')
    // after-survey page controller
    .controller('afterSurveyController', function ($scope, $ionicPlatform, $state, $http) {
        {
            console.log("sup");
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
            // TODO remove de.appplant.cordova.plugin.email-composer
            }

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