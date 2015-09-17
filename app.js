var app = angular.module('amp', ['ui.bootstrap', 'ngAnimate']);

app.controller('NavCtrl', function ($scope, $modal, $log) {

  $scope.openC = function () {

    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'ContactUs',
      controller: 'ModalInstanceCtrl'
    });

    modalInstance.result.then(function () {
      $log.info('Contact modal dismissed at: ' + new Date());
    });
  };

  $scope.openJ = function () {

    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'JoinUs',
      controller: 'ModalInstanceCtrl'
    });

    modalInstance.result.then(function () {
      $log.info('Join modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

app.controller('SlideCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/300/abstract',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});


app.controller('ProCtrl',  function($scope) {
  $scope.idea = 'Hello World!';
});
