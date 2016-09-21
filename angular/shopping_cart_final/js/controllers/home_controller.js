angular.module("shopping_cart").controller("home_controller",["$scope", "product_type_service", 
                                                              function($scope, product_type_service){
    $scope.productTypes=product_type_service.productTypes;
}]);