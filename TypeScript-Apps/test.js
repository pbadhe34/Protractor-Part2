/*
function greet(person) {
    return "Hello, " + person;
}
*/
function greet(user) {
    return "Hello, " + user;
}
var Account = (function () {
    function Account() {
    }
    Account.prototype.update = function () {
        return "sfsd";
    };
    return Account;
}());
/*
function getData(data)
{
  var result = data.update()
  return result;
}
*/
function getData(data) {
    var result = data.update();
    return result;
}
var user = "Mohan Bhragav";
//var user = [0, 1, 2];
document.body.innerHTML = greet(user);
//document.body.innerHTML = greet(getData(123));
var ac = new Account();
document.body.innerHTML = greet(getData(ac));
