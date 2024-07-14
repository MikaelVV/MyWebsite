
let number1 = 1;
let number2 = 2;
let calculation;



function appendToDisplayScreen(){
 calculation = number1 + number2;

 console.log(calculation)
}

function showResults(){
    let firstNameBox = document.getElementById("firstname");
    let lastNameBox = document.getElementById("lastname");
    let firstNameValue = firstNameBox.value;
    let lastNameValue = lastNameBox.value;

    console.log(number1 +"\n" + firstNameValue + "\n" + lastNameValue)
}