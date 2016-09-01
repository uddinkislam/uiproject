var person = {
    'firstName': 'Islamuddin',
    'lastName': 'Noor',
    'DOB':'03/21/1992',
    'Age': '24',
    'Address': '8805 N Plaza Apt#2248 Austin, TX',
    'email' : 'ab.basinab@gmail.com',
};
console.log(person.firstName);
console.log(person.lastName);

var htmlContent = "<table class = 'table table-striped table-hover table-bordered'>"+
    "<tr>"+
    "<th> firstName</th>" +
    "<td>"+ person.firstName +"</td>" +
"</tr>"+
     "<tr>"+
    "<th> last Name</th>" +
    "<td>"+ person.lastName +"</td>" +
"</tr>"+
     "<tr>"+
    "<th> Date of Birth</th>" +
    "<td>"+ person.DOB +"</td>" +
"</tr>"+
     "<tr>"+
    "<th> Age</th>" +
    "<td>"+ person.Age +"</td>" +
"</tr>"+
     "<tr>"+
    "<th> Address</th>" +
    "<td>"+ person.Address +"</td>" +
"</tr>"+
     "<tr>"+
    "<th> email</th>" +
    "<td>"+ person.email +"</td>" +
"</tr>"+
    "</table>";

function loadPerson(){
    document.getElementById('person').innerHTML =  htmlContent;
}

