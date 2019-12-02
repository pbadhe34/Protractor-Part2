 
function greet(person) {
    return "Hello, " + person;
}

var user = "Mohan Bhragav";
var user = [0, 1, 2];

function getData(data)
{
    var result = data.update()
    return result;
 }

//document.body.innerHTML = greet(user);

document.body.innerHTML = greet(getData(123));

