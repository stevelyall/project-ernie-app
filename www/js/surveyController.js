/**
 * Controller for survey. Manages questions, scale, anchor points and collects responses.
 */
// TODO save response in local storage rather than json
// TODO get begin and end timestamps and save in local storage

angular.module('ernie-app.controllers')
    // survey controller
    .controller('surveyController', function ($scope, $http, $state) {
        {
            // reference to response buttons
            $scope.buttons;

            // current question number
            $scope.questionIndex = 0;

            // index of selected response
            $scope.selectedResponse = -1;

            // create model for questions
            // use http service to get data from json file
            $scope.questions = $http.get('js/questions.json').success(function (data) {
                $scope.questions = data.items;
            });


            /**
             * Creates an array used by the ng-repeat in the surveyitem template to create response buttons.
             * @param scaleType the type of scale for the current question
             * @returns an array of intergers from 0-5 or 1-9
             */
                // returns an array for ng-repeat to iterate through creating scale buttons
            $scope.provideScaleArray = function (scaleType) {
                var zeroFive = [0, 1, 2, 3, 4, 5];
                var oneNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                var scaleArray;
                (scaleType == "0-5") ? scaleArray = zeroFive : scaleArray = oneNine;

                return scaleArray;
            };

            /**
             * For each question, determines the midpoint of the scale to be displayed in the legend.
             * Precondition: questions model loaded with http service
             * @returns integer midpoint of the scale
             */
            $scope.findMiddleIndex = function () {
                if ($scope.questions[$scope.questionIndex] == undefined) {
                    return;
                }
                // midpoint for 0-5 scale, if needed
                if ($scope.questions[$scope.questionIndex].scale == "0-5") {
                    return 3;
                }
                else {
                    // 1-9 midpoint
                    return 4;
                }
            };

            /**
             * Handler for Next button clicks.
             */
            $scope.nextClick = function () {
                console.log("next Button Clicked");

                // save response

                window.localStorage["q" + $scope.questionIndex] = parseInt($scope.selectedResponse);
                console.log("response saved " + window.localStorage["q" + $scope.questionIndex]);

                // advance to next question
                $scope.selectedResponse = -1;
                $scope.questionIndex++;
                console.log("advancing to question " + ($scope.questionIndex + 1));

                // check if end of survey reached
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

            };

            /**
             * Handler for response button clicks. Controls button style on selection and picking responses.
             * @param num element id of the button clicked
             */
            $scope.numSelect = function numSelect(num) {
                //console.log(num + " passed to numSelect");

                var numberOfButtons = ($scope.questions[$scope.questionIndex].scale == "0-5") ? numberOfButtons = 6 : numberOfButtons = 9;
                //console.log("numberOfButtons: " + numberOfButtons);
                $scope.buttons = new Array(numberOfButtons);
                //console.log($scope.buttons.length);

                // array of button elements for the current question
                for (var i = 0; i < $scope.buttons.length; i++) {
                    var button = document.getElementById(i);
                    //console.log("looping " + i + " " + button);
                    $scope.buttons[i] = button;
                }

                //console.log("buttons array: " + $scope.buttons);

                // button clicked by user
                var buttonPushed = document.getElementById(num);

                console.log("button " + buttonPushed.innerHTML + " pushed");

                // show all buttons as deselected
                for (var i in $scope.buttons) {
                    $scope.buttons[i].className = "itembutton button";
                }

                // apply selected style to button clicked by user
                buttonPushed.className += (" selecteditembutton");

                //
                $scope.selectedResponse = buttonPushed.innerHTML;

                // make next button visible
                document.getElementById("nextButton").style.display = "";

            }
        }
    })

    .directive('scaleDirective', function () {
        return {
            link: function (scope, element) {
                element.bind('click', function () {
                    scope.numSelect(element.attr('id'));
                });
            }
        }
    });