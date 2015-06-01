describe('disclaimer/privacy controller', function() {
	beforeEach(module('ernie-app'));

	var $controller, $state;

	beforeEach(inject(function(_$controller_, _$state_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
		$state = _$state_;
		localStorage.clear();
	}));

	describe('Disclaimer', function() {
		var $scope, controller;

		beforeEach(function() {
			$scope = {};
			controller = $controller('disclaimerPrivacyController', {
				$scope: $scope,
				$state: $state
			});
			spyOn($state , 'go');
		});


		it("scope defined", function() {
			expect($scope).toBeDefined();
		});

		it("state defined", function() {
			expect($state).toBeDefined();
		});

		//it('disclaimer accepted on button click', function() {
		//	expect(localStorage['disclaimerAccepted']).not.toBeDefined();
		//	$scope.disclaimerContinueButtonOnClick();
		//	expect(localStorage['disclaimerAccepted']).toBe('true');
		//
		//});
	});
});