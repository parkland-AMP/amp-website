var app = angular.module('amp', ['ui.bootstrap', 'ngAnimate']);

app.controller('NavCtrl', function ($scope, $uibModal, $log) {

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'ContactUs',
      controller: 'ModalInstanceCtrl',
    });

    modalInstance.result.then(function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

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

app.controller('MainCtrl', function ($scope){
  
})
