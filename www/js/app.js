// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ernie-app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ernie-app', ['ionic', 'ernie-app.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        // back button closes app in all states
       $ionicPlatform.onHardwareBackButton(function() {
           navigator.app.exitApp();
       });
    })


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            // initial state
            .state('home', {
                url: "/home",
                templateUrl: 'templates/home.html'
            })

            // state for survey
            .state('survey', {
                url: "/survey",
                templateUrl: 'templates/surveyitem.html'
            })

            // state for finished survey
            .state('afterSurvey', {
                url: "/aftersurvey",
                templateUrl: 'templates/aftersurvey.html',
                controller: 'afterSurveyCtrl'
            })

        $urlRouterProvider.otherwise('/templates/home.html');
    });