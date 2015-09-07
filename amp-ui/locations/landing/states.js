app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('landing', {
                    url: '/',
                    controller: 'SplashCtrl',
                    templateUrl: '/locations/landing/landing.html'
                });
    }]);
