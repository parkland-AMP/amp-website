app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('service', {
                    url: '/Service',
                    controller: 'SerCtrl',
                    templateUrl: '/locations/service/service.html'
                });
    }]);
