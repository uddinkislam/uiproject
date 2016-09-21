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
var url = "/service/inventory_type";


app.get(url,function(req, res, next){
   //arrays to store dynamic parameters
    
    
    var query = "SELECT description FROM inventory_type";
    req.getConnection(function(err, connection){
       if(err) return next(err);
        
        connection.query(query, function(err, results){
           if(err){
               console.log(err);
               return next("Mysql error, check your query");
           } 
            res.json(results);
            console.log(results);
            
        });
        
        
    });
    
    
});

//routing
app.get('/index', function(req, res){
   res.redirect('/views/index.html'); 
    });

//End of routing

//launching application on localhost.
app.listen(8280, function(){
   console.log('server loaded on port 8280'); 
    
});