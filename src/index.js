
let number1 = 1;
let number2 = 2;
let calculation;
let firstNameValue;
let lastNameValue;

// Person object that holds all the information.
let person = {

    firstName:"" ,
    lastName: "",
    age: 0,
    email: "",
    address: ""

};

function appendToDisplayScreen(){
 calculation = number1 + number2;

 console.log(calculation)
}

function showResults(){
    let firstNameBox = document.getElementById("firstname").value;
    let lastNameBox = document.getElementById("lastname").value;
    let ageBox = document.getElementById("age").value;
    let emailBox = document.getElementById("email").value;
    let adressBox = document.getElementById("adress").value;
    
     person.firstName = firstNameBox;
     person.lastName = lastNameBox;
     person.age = ageBox;
     person.email = emailBox;
     person.address = adressBox;

    console.log(number1 +"\n" + person.firstName + "\n" + person.lastName)
    console.log(person)
}