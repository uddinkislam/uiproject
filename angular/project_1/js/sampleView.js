angular.module("sampleView", ["ngRoute"])
.config(function($locationProvider, $routeProvider){
   //route to home page
    $routeProvider
    .when("/",{
        controller : "sampleViewCtrl",
       templateUrl : "/views/home.html" 
    })
    .when("/home", {
        controller : "homeCtrl",
        templateUrl : "/views/home.html"
    })
    .otherwise({
       templateUrl : "/views/error.html" 
    });
    
    
    $locationProvider
        .html5Mode(false)
        .hashPrefix("!")
    
    
});
