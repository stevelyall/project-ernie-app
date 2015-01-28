var ernieApp= angular.module('ernieApp', []);


// controller
ernieApp.controller('surveyController', function surveyController($scope) {
    $scope.questions = [
        {
            "id" : "q1",
            "question" : "At the moment I feel happy",
            "scale" : "5",
            "response" : "0"
        },
        {
            "id" : "q2",
            "question" : "At the moment I feel relaxed",
            "scale" : "5",
            "response" : "0"
        },
        {
            "id" : "q2",
            "question" : "At the moment I feel angry",
            "scale" : "5",
            "response" : "0"
        },
        {
            "id" : "q3",
            "question" : "At the moment I feel stressed",
            "scale" : "5",
            "response" : "0"
        },
        {
            "id" : "q4",
            "question" : "At the moment I feel anxious",
            "scale" : "5",
            "response" : "0"
        },
        {
            "id" : "q5",
            "question" : "At the moment I feel depressed",
            "scale" : "5",
            "response" : "0"
        }
    ]




});
