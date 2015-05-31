describe('init controller', function() {
    beforeEach(module('ernie-app'));

    var $controller, $state;

    beforeEach(inject(function(_$controller_, _$state_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
		$state = _$state_;
		localStorage.clear();
    }));

    describe('correct state transitions are made', function() {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('initController', {
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

		// TODO this is undefined? correctly mock state?
		it("state.go defined", function() {
			expect($state.go()).toBeDefined();
		});
        it('license not accepted, go to disclaimer', function() {
            window.localStorage['licenseAccepted'] = undefined;
            expect($state.go).toHaveBeenCalledWith('disclaimer');
        });

		it('privacy not accepted, go to privacy policy', function() {
			window.localStorage['privacyAccepted'] = undefined;
			expect($state.go).toHaveBeenCalledWith('privacy');
		});

		it('both accepted, go to main menu', function() {
			window.localStorage['privacyAccepted'] = 'true';
			window.localStorage['licenseAccepted'] = 'true';
			expect($state.go).toHaveBeenCalledWith('home');
		})
    });
});