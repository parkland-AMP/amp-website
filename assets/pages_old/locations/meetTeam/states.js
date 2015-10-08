app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('meetTeam', {
                    url: '/meet-the-team',
                    controller: 'TeamCtrl',
                    templateUrl: '/locations/meetTeam/meetTeam.html'
                });
    }]);
