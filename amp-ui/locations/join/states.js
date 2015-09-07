app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('join', {
                    url: '/joinUs',
                    controller: 'JoinCtrl',
                    templateUrl: '/locations/join/join.html'
                });
    }]);
