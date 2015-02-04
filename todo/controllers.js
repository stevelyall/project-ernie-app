var ernieApp = angular.module('ernieApp', []);


// controller
ernieApp.controller('surveyController', function surveyController($scope, $http) {
    // use http servie to get data from json file
    $http.get('js/questions.json').success(function(data) {
        $scope.questions = data;
    });

});