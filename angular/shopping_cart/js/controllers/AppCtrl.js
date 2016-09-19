angular.module('shoppingCart').controller('appCtrl',['$scope', 'itemTypesService', function($scope, itemTypesService){
    console.log(itemTypesService.itemTypes);

    $scope.itemTypes= itemTypesService.itemTypes;
    
    
}]);