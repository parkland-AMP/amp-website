app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('project', {
                    url: '/project',
                    controller: 'ProjCtrl',
                    templateUrl: '/locations/project/project.html'
                });
    }]);
