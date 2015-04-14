# ERA mobile application Readme
https://github.com/stevelyall/project-ernie-app

The ERA mobile app is downloaded by participants participating in the ERA project studies, and collects demographic information and survey responses from participants and sends them to the server. It is a hybrid mobile application built using the Ionic Framework (http://ionicframework.com/), relying on HTML5, CSS3, and AngularJS. To install the framework and the required components to build the application for either platform, visit the Getting Started page on the Ionic site: http://ionicframework.com/getting-started/

## Beta Version
Currently, ERA acts as a standalone application which does not send participants' data to the server until permission has been granted by the principal investigator. This functionality can be re-enabled in afterSurveyController.js.
The purpose of the beta version being to test the application's UI on various devices and get feedback from users, scheduled surveys and notifications have not yet been implemented. At present, users are taken through the process of setting up the application and may complete a practice survey as many times as they wish. 

## Survey Content
At present, the survey question text, scale and anchor points are static, and are stored locally in the application. These items may be modified by editing questions.json and rebuilding the application using the Ionic CLI:
For example:
```
ionic build android
ionic build iOs
```
Additional information on the Ionic CLI can be found at http://ionicframework.com/docs/cli/

## Responses
As the user progresses through the survey, responses are stored in local storage. After the survey has been completed, the participant's demographic information and responses are stored in a JSON string and ~~sent to the server using the HTTP POST method~~.

## Dependencies Included
 * Apache Cordova Device Plugin - used to access UUID for the device, which is used as a substitute for a researcher-provided participant id. https://github.com/apache/cordova-plugin-device
 * Email Composer with Attchments Plugin - used to compose a blank email message for beta testers to send feedback

