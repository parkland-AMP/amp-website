app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('portfolio', {
                    url: '/portfolio',
                    controller: 'PortCtrl',
                    templateUrl: '/locations/portfolio/portfolio.html'
                });
    }]);
