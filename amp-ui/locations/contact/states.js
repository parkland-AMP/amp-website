app.config(['$stateProvider',
    function ($stateProvider) {
		
        $stateProvider
                .state('contact', {
                    url: '/contactUs',
                    controller: 'ContCtrl',
                    templateUrl: '/locations/contact/contact.html'
                });
    }]);
