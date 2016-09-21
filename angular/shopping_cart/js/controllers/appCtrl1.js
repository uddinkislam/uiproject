angular.module('shoppingCart').controller('appCtrl1',['$scope', '$http', function($scope, $http){
    
    
    //calling customer service with id 1
   /* $scope.contents="Hellow World!";
    $http.get("/service/customer/1").then(function(response){
        console.log("loggin just the response");
        console.log("End of response");
       $scope.contents = response.data;
        console.log($scope.contents);
    });*/
    
    
    // Data to post information, assume this is comming from a form element
    var data =
        {
        first_name : "Abdul",
        last_name : "Razzeq",
        address : "8805 N Plaza Apt 2248",
        city : "Austin",
        state : "TX",
        email : "Razzeq.Abdul@gmail.com",
        active : "Yes"
        
        };
              
              
              
    //  POST SERVICE TO ADD INFORMATION TO THE SERVICE
    $http.post("/service/customer", data)   //here you can replace the data variable with a JSON object
    .success(function(data){
        console.log(data);
    })
    .error(function(data){
        console.log(data);
    });
}]);