# ERA Mobile Application [![Build Status](https://travis-ci.org/stevelyall/project-ernie-app.svg?branch=notification)](https://travis-ci.org/stevelyall/project-ernie-app)
https://github.com/stevelyall/project-ernie-app

The ERA mobile app is downloaded by participants participating in the ERA project studies, and collects demographic information and survey responses from participants and sends them to the server. It is a hybrid mobile application built using the Ionic Framework (http://ionicframework.com/), relying on HTML5, CSS3, and AngularJS. To install the framework and the required components to build the application for either platform, visit the Getting Started page on the Ionic site: http://ionicframework.com/getting-started/

## Beta Version
Currently, ERA acts as a standalone application which does not send participants' data to the server until permission has been granted by the principal investigator. This functionality can be re-enabled in afterSurveyController.js.
The purpose of the beta version being to test the application's UI on various devices and get feedback from users, scheduled surveys and notifications have not yet been implemented. At present, users are taken through the process of setting up the application and may complete a practice survey as many times as they wish.
Local notifications have been implemented, and the background service to manage surveys is in progress.

## Survey Content
At present, the survey question text, scale and anchor points are static, and are stored locally in the application. These items may be modified by editing questions.json and rebuilding.

## Responses
As the user progresses through the survey, responses are stored in local storage. After the survey has been completed, the participant's demographic information and responses are stored in a JSON string and ~~sent to the server using the HTTP POST method~~.

## Dependencies Included in Repository
 * ngCordova - extensions for AngularJS for Cordova. http://ngcordova.com/

 * Ionic Keyboard Plugin - allows for easier control of device keyboard. https://github.com/driftyco/ionic-plugin-keyboard
 * Apache Cordova Local Notifications - to display notifications on Android and iOS devices. https://github.com/katzer/cordova-plugin-local-notifications
 * Apache Cordova Device Plugin - used to access UUID for the device, which is used as a substitute for a researcher-provided participant id. https://github.com/apache/cordova-plugin-device
 * Email Composer with Attachments Plugin - used to compose a blank email message for beta testers to send feedback. https://github.com/jcjee/email-composer


## Setting up environment to develop ERA

1. Install Ionic and its dependencies: http://ionicframework.com/getting-started/
2. If you haven't already, clone the ERA repository: https://github.com/stevelyall/project-ernie-app.git
3. Change into the project-ernie-app project root and run:
```
npm install
```
This ensures you have other required packages and those required for testing.

4. Add the android and iOS platforms to the project:

```
ionic platform add android
ionic platform add ios
```

5. Generate the icon and splash screen images:

```
ionic resources
```

6. Build the application for your desired platform.
For example:
```
ionic build android
ionic build ios
```

7. Deploy to a device, or run using Ionic's built in web server. For example:

```
ionic run ios
ionic run android
ionic serve
```

Additional information on Ionic and how to work with Ionic projects can be found at http://ionicframework.com/docs/