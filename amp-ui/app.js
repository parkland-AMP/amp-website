var app = angular.module('amp', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
]).run(
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
     }
);
