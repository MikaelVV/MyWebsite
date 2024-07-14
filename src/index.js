
let number1 = 1;
let number2 = 2;
let calculation;
let firstNameValue;
let lastNameValue;

// Person object that holds all the information.
let person = [

    {firstName:""} ,
    {lastName: ""},
    {age: 0},
    {email: ""},
    {address: ""}

];

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

    console.log(person)
}

function addingPeopleToTables(){
    const newTable = document.createElement("table");
    newTable.innerHTML = "<thead><th>First name</th><th>Last name</th><th>Age</th><th>Email</th><th>Adress</th></thead>";

    for(personList of person){
        const newRow = document.createElement("tr");
        const tdFirstName = document.createElement("td");
        const tdLastName = document.createElement("td");
        const tdAge = document.createElement("td");
        const tdEmail = document.createElement("td");
        const tdAdress = document.createElement("td");
        tdFirstName.textContent = person.firstName;
        tdLastName.textContent = person.lastName;
        tdAge.textContent = person.age;
        tdEmail.textContent = person.email;
        tdAdress.textContent = person.address;

        newRow.appendChild(tdFirstName);
        newRow.appendChild(tdLastName);
        newRow.appendChild(tdAge);
        newRow.appendChild(tdEmail);
        newRow.appendChild(tdAdress);
        newTable.appendChild(newRow);
    }

}