// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ernie-app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ernie-app', ['ionic'])

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

      .state('ernieApp.survey', {
        url: "/survey",
        views: {
          'menuContent': {
            templateUrl: "templates/surveyitem.html",
            controller: 'SurveyCtrl'
          }
        }
      })

      $urlRouterProvider.otherwise('/app/surveyitem');
});
