angular.module('ernieservice', [])
	.service('ernieservice', function () {
	this.notify = function () {
		return "Hello";
	}
})