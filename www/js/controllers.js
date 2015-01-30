angular.module('ernie-app.controllers',[])

    .controller('surveyCtrl', function ($scope, $http) {
        // use http service to get data from json file
        $http.get('js/questions.json').success(function(data) {
            $scope.questions = data;
        }),

        $scope.test = function() {
        console.log($scope.questions.toString());
        alert("working");
        }

    });
;