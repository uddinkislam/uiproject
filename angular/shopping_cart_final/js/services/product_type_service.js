angular.module("shopping_cart").service("product_type_service", ["$http", function($http){
    
    
    //calling inventory_type
    
        
    $http.get("/service/inventory_type").then(function(response){
        console.log("loggin just the response");
        console.log("End of response");
        //this.productTypes={};
        
       
        
        var productTypes= response.data;
        
        
        
        
        
//        var insertValues={};
//        for(var i=0; i=productTypes.length, i++){
//            insertValues[productTypes[i]=]
//        }
        console.log(productTypes);
    });
    
}]);