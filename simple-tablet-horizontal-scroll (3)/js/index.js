var app = angular.module('myApp', []);

// controller
app.controller('mainCtrl', function($scope) {
  $scope.items = [];
    $scope.items.push({ id: 0, name:"Zwiebeln" });
    $scope.items.push({ id: 1, name:"Sellerie" });
    $scope.items.push({ id: 2, name:"Schinken" });
    $scope.items.push({ id: 0, name:"Eier" });
    $scope.items.push({ id: 1, name:"Petersilie" });
    $scope.items.push({ id: 2, name:"a" });
    $scope.items.push({ id: 0, name:"a" });
    $scope.items.push({ id: 1, name:"a" });
    $scope.items.push({ id: 2, name:"a" });


  $scope.click = function(id) {
      $('#recipeText').append($scope.items[id].name);
  };



});

//$scope.names = [
 //       {name:'Potatoe',amount:'3'},
  //      {name:'Ziebel',amount:'4'},
   //     {name:'Ei',amount:'3'}
    //];