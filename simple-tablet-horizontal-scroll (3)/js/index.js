var app = angular.module('myApp', []);

// controller
app.controller('mainCtrl', function($scope) {
  $scope.items = [];
  $scope.items.push({ id: 0, name:"a" });
  $scope.items.push({ id: 1, name:"b" });
  $scope.items.push({ id: 2, name:"c" });
  $scope.items.push({ id: 3, name:"d" });
  

  $scope.click = function(id) {
    $scope.items[id].selected = !$scope.items[id].selected;
  };
 
  
  
});

//$scope.names = [
 //       {name:'Potatoe',amount:'3'},
  //      {name:'Ziebel',amount:'4'},
   //     {name:'Ei',amount:'3'}
    //];