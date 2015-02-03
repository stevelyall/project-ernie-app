// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ernie-app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ernie-app', ['ionic', 'ernie-app.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })



    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home', {
                url: "/home",
                templateUrl: 'templates/home.html'
            })

            .state('survey', {
                url: "/survey",
                templateUrl: 'templates/surveyitem.html',
                controller: 'surveyCtrl'
            })

        $urlRouterProvider.otherwise('/templates/home.html');
    });