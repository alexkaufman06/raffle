app = angular.module("Raffler", []);

app.controller('RaffleCtrl', function RaffleCtrl($scope) {
  $scope.entries = [
    {name: "Joe"},
    {name: "Bob"} 
  ];

});
