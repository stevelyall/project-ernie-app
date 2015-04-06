// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ernie-app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ernie-app', ['ionic', 'ernie-app.controllers', 'ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });

        // back button closes app in all states
        $ionicPlatform.registerBackButtonAction(function () {
            ionic.Platform.exitApp();
        }, 100);
    })


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            // initial state
            .state('init', {
                url: "/init",
                templateUrl: "templates/init.html",
                controller: "initController"
            })

            // disclaimer
            .state('disclaimer', {
                url: '/disclaimer',
                templateUrl: 'templates/disclaimer.html',
                controller: 'disclaimerPrivacyController'
            })
            // privacy policy
            .state('privacy', {
                url: '/privacyPolicy',
                templateUrl: 'templates/privacyPolicy.html',
                controller: 'disclaimerPrivacyController'
            })

            // consent
            .state('consent', {
                url: '/consent',
                templateUrl: 'templates/consent.html',
                controller: 'consentController'
            })

            // participant ID
            .state('participantId', {
                url: '/participantId',
                templateUrl: 'templates/participantid.html',
                controller: 'participantIdController'
            }
        )

            // demographics
            .state('demographics', {
                url: '/demographics',
                templateUrl: 'templates/demographics.html',
                controller: 'demographicsController'
            })

            // location definition
            .state('locationDefine', {
                url: '/locationDefine',
                templateUrl: 'templates/locationdefine.html',
                controller: 'locationDefineController'
            })

            // home
            .state('home', {
                url: "/home",
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })

            .state('setup', {
                url: "setup",
                templateUrl: "templates/setup.html",
                controller: "setupController"
            })

            .state('locationSelect', {
                url: '/locationSelect',
                templateUrl: 'templates/locationselect.html',
                controller: 'locationSelectController'
            })

            // state for survey
            .state('survey', {
                url: "/survey",
                templateUrl: 'templates/surveyitem.html',
                controller: 'surveyController'
            })

            // state for finished survey
            .state('afterSurvey', {
                url: "/aftersurvey",
                templateUrl: 'templates/aftersurvey.html',
                controller: 'afterSurveyController'
            });

        $urlRouterProvider.otherwise('/templates/init.html');
    });