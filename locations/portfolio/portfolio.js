app
	.controller('PortCtrl', function($scope){
		$scope.title = 'Portfolio';
		$scope.project = false;
		
		$scope.toggle = function() {
			$scope.project = !$scope.project
		}

});
