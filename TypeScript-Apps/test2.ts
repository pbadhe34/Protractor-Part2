interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = {lastname: "Kadam",firstname: "Viju"};
var user1 = {firstname: "Viju"};
var user2= {};

document.body.innerHTML = greeter(user);

//document.body.innerHTML = greeter(user1);
//document.body.innerHTML = greeter(user2);
