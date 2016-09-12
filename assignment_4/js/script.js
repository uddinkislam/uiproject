function login(){
     var credentials = [{
        'email': 'ab.basinaa@gmail.com',
        'password': 'izzyizzy12',
    },
  {
         'email': 'ab.basinab@gmail.com',
        'password': 'izzyizzy34',
   },
{            'email': 'ab.basinac@gmail.com',
        'password': 'izzyizzy56',
                           
                       }];

    
    
   // this.validation = function(){
        var my_email = $('#email').val();
        var my_password = $('#pass').val();
        
        for (var i=0; i <credentials.length; i++){
            
            if(credentials[i].email == my_email && credentials[i].password == my_password)
            {
                
                alert("you are logged in");
                break;
            }
            else
            { 
                alert('enter the correct credentials');
                break;
            }
        }
    //}
    
    
    }
    
    

    
    
    
    
    
    $(document).ready(function(){
   $("#email").on("blur", function(){
         var email_address =$("#email").val();
  //  alert(first_name);
    if(email_address.length ==0){
        $("#lblemail").addClass('error');
        $("#emailerr").html('Invalid email').addClass('error');
    } else{
        $("#lblemail").remove('error').removeClass('error');
        $("emailerr").html(" ");
    }
   });
        
        $('#pass').on('blur', function(){
            var login_pass =$('#pass').val();
            if(login_pass.length == 0){
                $('#lblpass').addClass('error');
                $('#passerr').html('Invalid Password').addClass('error');
            } else{
              $("#lblpass").remove('error');
                $('#passerr').html(" ");
            }
        });
        
        
    });
                  