# ERA Project Mobile App

Mobile application for Portable Research Data Acquisition System.

Problem Statement
=================

While gathering self-report data about participants' emotions has typically been done in the lab, it is difficult to follow participants as they go about their lives to collect data about their emotional experiences, strategies for managing their emotional states and effectiveness of their chosen strategies. Traditional laboratory measures involve surveys administered by researchers using a pen and paper method, but are limited to measuring the participant's responses at only one point in time and take place under very artificial conditions. 

Goal
====

The goal of this project is to enable research in emotion regulation to be done longitudinally, as participants carry out their regular daily routine and data is collected over a period of time using mobile devices. The project should provide a system through which participants can complete the study questionnaire and researchers can view and access data through a web interface. 


Deliverables
============

* Mobile application to conduct surveys to collect data from participants.
* Database to store completed survey data.
* Web application to allow researchers to view and retrieve data from the database.
* Web service to collect completed assessment data from devices and send survey content to devices.
* Documentation for future maintenance and development 

Functional Requirements
=======================
###Mobile application must...

* allow participants to select a 7-day period over which assessments will be conducted in an initial set-up menu.
* allow participants to choose a 12-hour period each day during which they will complete six assessments in an initial set-up menu. The 12-hour period is divided into six 2-hour intervals, with each assessment taking place at a random time within the two hour period. Assessments must not occur within 45 mins of one another.
* provide a demo mode which simulates the process of completing a questionnaire, but without any data being collected.
* allow each participant to provide the names of four locations they spend most of their time in an initial set-up menu.
* provide the informed consent information for the study, and ensure that participants have agreed to it before being allowed to participate.
* collect a number of demographic items from participants at the beginning of the assessment period.
* provide a way of ensuring participants cannot participate in the same study multiple times.
* during a questionnaire, prevent participants from going back to previous questions and not allow them to continue to the next question until they have answered the current one.
* allow a participant to continue completing a questionnaire within 30 minutes if they close the application or are interrupted. If they do not return to complete the survey, data from the incomplete assessment should be saved.
* notify participants in several stages when it is time to complete a questionnaire. The first notification should provide the option for the participant to begin the assessment or be reminded in 10 minutes. The second notification should only give the participant the option of beginning the assessment. If the participant does not respond, the notification should remain visible for 10 minutes. After 30 minutes from the first notification, the assessment cannot be completed for that 2-hour period, and the participant will be notified that they have missed an assessment. A uniquely identifiable sound should be used. 
* extend the sampling period by an additional day if a participant misses more than one of six assessments, and notify the participant.
* record the assessment day, assessment number for that day, and time that the participant begins as well as finishes each assessment.
* prompt the participant to indicate which of their four predefined locations they are currently at, and allow them to enter the name of another location if they aren't at any of them.
* be capable of displaying survey questions users should respond to quantitatively, as well as by entering responses into a text box.
* display quantitative questions with varying scales and anchor points.
 

###Web interface must...
* allow researchers to view raw data for completed surveys.
* allow researchers to retrieve download data in a format readable by Excel.
* allow researchers to add or remove items from assessments, which can include quantitative, qualitative and instruction items.
* allow researchers to modify the number, ordering, scale, anchor points and type of questions in the assessment.
* allow researchers to select which items are included in the demo mode.
* allow researchers to maintain multiple lists of questions, and select which should be delivered to participants' devices.
* provide a way to run multiple groups of participants with different assessments simultaneously.
* require users to log in to view data.


Usability Requirements
=======================
###Mobile application must...
* have a distinct notification sound.
* be available on both iOS and android devices.
* support a range of smartphone screen sizes.

###Web interface must...
* allow researchers to easily access data from a browser.
