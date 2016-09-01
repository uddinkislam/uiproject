var personArray=[];

function addPerson(){
    
    
    var gender = "";
  var radios = document.getElementsByName('gender');
    for(var i = 0, length = radios.length; i<length; i++){
        if(radios[i].checked){ 
            gender = radios[i].value;
            break;
        }
    }
    
//this is how to read the values in the text boxes, basically we are assigning the variable to the value of an element got by id    
  /*  var first_name =$("#fname").val();
  //  alert(first_name);
    if(first_name.length ==0){
        $("#lblfname").addClass('error');
        $("#fnameerr").html('First Name cannot be empty').addClass('erro');
    } else{
        $("#lblfnamae").remove('error').removeClass('error');
        $("fnameerr").html(" ");
    }
    
    var last_name =$("#lname").val();
    if(last_name.length ==0){
        $("#lbllname").addClass('error');
        $("#lnameerr").html('Last Name cannot be empty');
    } else{
        $("#lblnamae").remove('error');
        $("lnameerr").html(" ");
    }
    
    var my_address =$("#address").val();
 //  alert(my_address);
     if(my_address.length ==0){
        $("#lbladdress").addClass('error');
        $("#addresserr").html('address cannot be empty');
    } else{
        $("#lbladdress").remove('error');
        $("addresserr").html(" ");
    }
    */
    
    var phone_number =$("#number").val();
    
    var city =$("#city").val();
    var country =$("#country").val();
    
   /* var gender =$("#genders").checked;
    alert(gender);*/
    

    

    
    
    var person={    
        'lname':document.getElementById('lname').value,
        'fname':document.getElementById('fname').value,
        'gender': gender,
        'address':document.getElementById('address').value,
        'city':document.getElementById('city').value,
        'country':document.getElementById('country').value,
        'phonenumber':document.getElementById('number').value,
    };
    console.log(person.lname);
    personArray.push(person);
    console.log(personArray);
    
}

function traverseArray(){
    var htmlContents = "<table>" +
     "<tr>" + 
        "<th> Name </th>" +
        "<th> Gender </th>" +
        "<th> Address </th>" +
        "<th> City </th>" +
        "<th> Country </th>" +
        "<th> Phone Number </th>" +
        "</tr>";
    for(var i=0; i<personArray.length; i++){
        htmlContents = "<table>" +   "<tr>" +
            "<td>" +
            personArray[i].lname + ", " + personArray[i].fname + "</td>" +
            "<td>" +
            personArray[i].gender + "</td>" +
            "<td>" +
            personArray[i].address + "</td>" +
            "<td>" +
            personArray[i].city + "</td>" +
            "<td>" +
            personArray[i].country +"</td>" +
            "<td>" +
            personArray[i].phonenumber + "</td>" +
            "<td>" +
                "</tr>"+
            "<table>"
    };
        htmlContents += "<table>";
   // document.getElementById('display').innerHTML = htmlContents;
    $('#display').html(htmlContents); //jquery syntax to display and do the same thing as above
    
}

/*$(document).ready(function(){
                $('#btn').click(function(){
                                alert('windows alert');
                                });
                });*/

//below function does the same thing as above, but below function we can use more jquery APIs

$(document).ready(function(){  
$('#btn').on('dblclick', function(){
    alert('windows alert');
    
    
});
    $('#first').hide();
$('#second').hide();
    
     $('#frstbtn').on('click', function(){
    $('#first').show();
        
    });
    
     $('#scnbtn').on('click', function(){
    $('#second').show();
        
    });
    
//we use trigger function to trigger all the functionalities in other buttons within one button    
    $('#trdbtn').on('click', function(){
       $('#frstbtn').trigger('click');
        $('#scnbtn').trigger('click');
    });
    
});

$(document).ready(function(){
    $("#frtbtn").click(function(){   
   $('#lblname').addClass('error'); 
        
    });    
});

$(document).ready(function(){
    $("#fftbtn").click(function(){  
   $('#lblname').removeClass('error'); 
        
    });    
});


// adding value to an element by this function it will put a value in the paramemters to the textbox by id
//$("#fname").val("Izzy");

$(document).ready(function(){
   $("#fname").on("blur", function(){
         var first_name =$("#fname").val();
  //  alert(first_name);
    if(first_name.length ==0){
        $("#lblfname").addClass('error');
        $("#fnameerr").html('First Name cannot be empty').addClass('erro');
    } else{
        $("#lblfnamae").remove('error').removeClass('error');
        $("fnameerr").html(" ");
    }
       
       
   }) ;
    
    $("#lname").on("blur", function(){
          var last_name =$("#lname").val();
    if(last_name.length ==0){
        $("#lbllname").addClass('error');
        $("#lnameerr").html('Last Name cannot be empty');
    } else{
        $("#lbllname").remove('error');
        $("lnameerr").html(" ");
    }
        
        
    });
    
    $("#address").on("blur", function(){
         var my_address =$("#address").val();
 //  alert(my_address);
     if(my_address.length ==0){
        $("#lbladdress").addClass('error');
        $("#addresserr").html('address cannot be empty');
    } else{
        $("#lbladdress").remove('error');
        $("addresserr").html(" ");
    }  
        
    });
    
    $("#myRadio").on("blur", function(){
      var my_gender = $("#myRadio").checked;
        if($('input[name=gender]:checked').length<=0){
            $("#lblgender").addClass('error');
        $("#gendererr").html('Choose the gender');

}else{
    $("#lblgender").removeClass('error');
        $("#gendererr").html(' ');
    
}
        
    });
    
});




