app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('about', {
                    url: '/AboutUs',
                    controller: 'AboCtrl',
                    templateUrl: '/locations/about/about.html'
                });
    }]);
