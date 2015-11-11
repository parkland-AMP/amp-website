var app = angular.module('amp', ['ui.bootstrap', 'ngAnimate']);

app.controller('NavCtrl', function ($scope, $uibModal, $log) {

  $scope.open = function () {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'ContactUs',
      controller: 'CUCtrl',
    });

    modalInstance.result.then(function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

app.controller('CUCtrl', function ($scope, $modalInstance) {

  $scope.cover = true;
  $scope.ok = function (form) {
    if (form.$invalid) {
      console.log("INVALID");
      $scope.cover = false;
    }

    if(form.$valid){
      $modalInstance.close();
   }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


app.controller('PortCtrl', function ($scope){

  $scope.projects = [
    {name:'Wesley Food Pantry', 
    info:'Wesley Food Pantry asked AMP to update their logo and raise awareness of \
     their new satellite location on Parkland\'s campus.\
      AMP created print and digital advertising material, updated social media graphics,\
       and wrote a radio public service announcement.', 
    img:'http://lorempixel.com/280/180/abstract/'},

    {name:'Illinois Radio Reader',
    info:'Wesley Food Pantry asked AMP to update their logo and raise awareness of \
     their new satellite location on Parkland\'s campus.\
      AMP created print and digital advertising material, updated social media graphics,\
       and wrote a radio public service announcement.',
    img:'http://lorempixel.com/280/180/abstract/'},

    {name:'The Bottom Line Diaper Bank',
    info:'Wesley Food Pantry asked AMP to update their logo and raise awareness of \
     their new satellite location on Parkland\'s campus.\
      AMP created print and digital advertising material, updated social media graphics,\
       and wrote a radio public service announcement.',
    img:'http://lorempixel.com/280/180/abstract/'},

    {name:'The Presentation Center at Parkland College',
    info:'Wesley Food Pantry asked AMP to update their logo and raise awareness of \
     their new satellite location on Parkland\'s campus.\
      AMP created print and digital advertising material, updated social media graphics,\
       and wrote a radio public service announcement.',
    img:'http://lorempixel.com/280/180/abstract/'},

    {name:'Parkland Entrepreneurial Network',
    info:'Wesley Food Pantry asked AMP to update their logo and raise awareness of \
     their new satellite location on Parkland\'s campus.\
      AMP created print and digital advertising material, updated social media graphics,\
       and wrote a radio public service announcement.',
    img:'http://lorempixel.com/280/180/abstract/'}
  ]
  
})