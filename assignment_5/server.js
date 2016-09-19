var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');




app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({    //to support URL-encoded bodies
    extended: true
}));

//setting up the static files for hosting
app.use(express.static(__dirname + '/'));

console.log("file initialized");

app.use(connection(mysql,{
    host        : 'localhost',
    user        : 'ui',
    password    : 'ui1234',
    database    : 'shopping_cart'
    },'request'));

//Routing
//this is routing but to connect the rest API with our database
app.get( "/service/customer",function(req, res, next){
   //arrays to store dynamic parameters
    var ids =[];
    
    var query = "SELECT * FROM customer";
    req.getConnection(function(err, connection){
       if(err) return next(err);
        
        connection.query(query, ids, function(err, results){
           if(err){
               console.log(err);
               return next("Mysql error, check your query");
           } 
            res.json(results);
            
        });
        
        
    });
    
    
});

app.get("/service/inventory_type", function(request, response, next){
   var producttypes =[];
    
    
    var query="SELECT * FROM inventory_type";
    request.getConnection(function(error, connection){
       if(error) return next(error);
        
        connection.query(query, producttypes, function(error, results){
           if(error){
               console.log(error);
               return next("MySql error, check your query");
           } 
            response.json(results);
            
        });
        
    });
    
});

app.get("/service/inventory", function(request, response, next){
   var products=[];
    
    var query="SELECT * FROM inventory";
    request.getConnection(function(error, connection){
       if(error) return next(error);
        
        connection.query(query, products, function(error, results){
           if(error){
               return next("MySql script error, check your query");
           } 
            response.json(results);
            
        });
        
    });
});

app.post("/service/inventory/post", function(request, response, next){
   var product =[];
    
    var query ="INSERT INTO inventory (id, inventory_typeid, description, price, prod_name, img_path, active) VALUES (?, ?, ?, ?, ?, ?, ?)";
      request.getConnection(function(error, connection){
         if(error){
             console.error("SQL connection error", error);
             return next (error); 
          }
          else{
              console.log("Success!");
              
              connection.query(query, ['05', '03', 'Cell Phone', '400', 'iPhone 6S', '34', 'true'], function(error, results){
                 if(error){
                     
                     console.error("SQL connection error2", error);
                     return next(error);
                 } 
                  response.json(results);
              });
              
              
              }
              
              
          
      });
  
    
});



/*
app.get( "/service/customer/:cust_id",function(req, res, next){
   //arrays to store dynamic parameters
    var ids =[];
    var cust_id=req.params.cust_id;
    ids.push(cust_id);
    
    var query = "SELECT * FROM customer WHERE cust_id = 1";
    req.getConnection(function(err, connection){
       if(err) return next(err);
        
        connection.query(query, ids, function(err, results){
           if(err){
               console.log(err);
               return next("Mysql error, check your query");
           } 
            res.json(results);
            
        });
        
        
    });
    
    
});

*/

app.get('/index', function(req, res){
   res.redirect('/views/index.html'); 
    });
app.get('/landing', function(req, res){
   res.send('In landing page'); 
    
});
app.get('/home', function(req, res){
   res.redirect('/views/home.html'); 
    
});
app.get('/electronics', function(req, res){
   res.redirect('/views/electronics.html'); 
    
});
app.get('/game', function(req, res){
   res.redirect('/views/game.html'); 
    
});

//End of routing

//launching application on localhost.
app.listen(9190, function(){
   console.log('server loaded on port 9190'); 
    
});