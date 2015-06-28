angular.module('ernieservice', ['$cordovaLocalNotification'])
	.service('ernieservice', function ($cordovaLocalNotification) {
	this.notify = function () {
		var alarmTime = new Date();
		alarmTime.setMinutes(alarmTime.getMinutes() + 1);
		$cordovaLocalNotification.add({
			id: "1234",
			date: alarmTime,
			message: "This is a message",
			title: "This is a title",
			autoCancel: true,
			sound: null
		}).then(function () {
			console.log("The notification has been set");
		});

	}
	});