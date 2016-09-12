angular.module('shoppingCart').directive('appTitle', function(){
    
    return{
        restrict : 'EAMC',
        templateUrl : '/views/appTitle.html',
        controller : function($scope){
            
            $scope.title='Shopping Cart';
    },
        
//When you get a data from a database and wants to manipulate and modify before posting to user that's why we use this kind of formate and functions
        
        link : function(scope){
            scope.title = 'from directive';
        }
        
        
        
        
        
        
        
        
        
    };
    
    
});