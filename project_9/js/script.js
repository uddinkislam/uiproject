var add = function(){
    //these will be private data members
    
    var x;
    var y;
    this.obj1 = this;
    
    this.setx =function(val){
        x=val;
        
        
    }
    
    this.sety = function (val){
        y=val;
    }
    this.getx = function(){
        return x;
    }
    this.gety = function(){
        return y;
    }
    this.addition = function(){
        return x+y;
    }
    
}

console.log('hello world!')



//there will be an error here cause x is a private memeber we can't access it with an object
//var obj = new add();
//obj.x =2;


var obj = new add();
obj.setx(2);
obj.sety (3);

obj.sub = function(){
    return obj.gety()-obj.getx();
}
console.log(obj.sub());
// console.log(obj2.sub()); cause we haven't  declared function of substraction in object 2

console.log(obj.addition());

var obj2 = new add();
obj2.setx(4);
obj2.sety (6);

console.log(obj2.getx());

add.prototype.mult = function(){
    return this.getx()*this.gety();
}

console.log(obj.mult());
console.log(obj2.mult());


function login(){
    var credentials = [{
        'email': 'ab.basinab@gmail.com',
        'password': 'xyz',
    },
  {
         'email': 'ab.basinab@gmail.com',
        'password': 'xyz',
   },
{            'email': 'ab.basinab@gmail.com',
        'password': 'xyz',
                           
                       }];
}
    
    
    this.validation = function(){
        var email = $('#email').val();
        var pass = $('#pass').val();
        
        for (var i=0; i <credentials.length; i++){
            if(Credentials[i].email == email && credentials[i].password == pass){
                
            }else document.write('enter the correct credentials');
        }
    }
    










//other way of creating function

function add (){
    
    
    
}