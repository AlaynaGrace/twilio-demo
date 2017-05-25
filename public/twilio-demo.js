myApp = angular.module('myApp',[]);



myApp.controller('TwilioController',['$http',function($http){
  var vm = this;


  vm.sendMessage = function(){
    console.log('button pressed');
    $http({
      url: '/sendMessage',
      method: 'POST',
      data: {phone: vm.phoneNumber.toString(), message: vm.message}
    }).then(function success(res){
      console.log(res);
      vm.message = '';
      vm.phoneNumber = '';
    },function fail(res){
      console.log(res);
    });
  };

}]);
