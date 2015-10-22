var app = angular.module('amp', ['ui.bootstrap', 'ngAnimate']);



app.controller('NavCtrl', function ($scope, $uibModal, $log) {

   
    $scope.open = function (mdl) {
      tmplUrl ='';
      if(mdl == "c"){tmplUrl ='ContactUs';}
      else if(mdl == "j"){ tmplUrl = 'JoinUs';}

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: tmplUrl,      
      controller: 'ModalInstanceCtrl',
    });

    modalInstance.result.then(function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.user = {name: 'Name', email: 'Email', message: 'Your message here', subject: ''};
  //var flag = true;

  $scope.ok = function (form) {
    
    if (form.$invalid) {
      console.log("INVALID");
      //flag = false;
  }

    
    //console.log(name)

    if(form.$valid){

      $modalInstance.close();
    }

    
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
