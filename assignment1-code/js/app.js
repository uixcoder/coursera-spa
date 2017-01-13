(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.listOfItems = "";
  $scope.message = "";

  $scope.checkListOfItems = function () {
    var list = $scope.listOfItems.split(',');
    if (list.length <= 3) $scope.message = "Enjoy!";
    else $scope.message = "Too much!";
  };
}

})();
