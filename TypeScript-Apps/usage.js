var brand = 'Chevrolet';
var message = "Today I bought a new " + brand + " car";
var height = 5.6;
var flag = false;
var carBrands = ['Chevrolet', 'Ford', 'General Motors'];
var childrenAges = [8, 5, 12, 3, 1];
var distance;
// Assigning different value types is perfectly fine
distance = '1000km';
distance = 1000;
// Allows to combine different types
var distances = ['1000km', 1000, true];
var Brand;
(function (Brand) {
    Brand[Brand["Chevrolet"] = 0] = "Chevrolet";
    Brand[Brand["Cadillac"] = 1] = "Cadillac";
    Brand[Brand["Ford"] = 2] = "Ford";
    Brand[Brand["Chrysler"] = 3] = "Chrysler";
    Brand[Brand["Dodge"] = 4] = "Dodge";
})(Brand || (Brand = {}));
;
var myCar = Brand.Cadillac;
var myCarBrand = Brand[1];
var BrandsReduced;
(function (BrandsReduced) {
    BrandsReduced[BrandsReduced["Tesla"] = 1] = "Tesla";
    BrandsReduced[BrandsReduced["GMC"] = 2] = "GMC";
    BrandsReduced[BrandsReduced["Jeep"] = 3] = "Jeep";
})(BrandsReduced || (BrandsReduced = {}));
;
var vehicle = BrandsReduced.Tesla;
//var myType:BrandsReduced =1;
var StackingIndex;
(function (StackingIndex) {
    StackingIndex[StackingIndex["None"] = 0] = "None";
    StackingIndex[StackingIndex["Dropdown"] = 1000] = "Dropdown";
    StackingIndex[StackingIndex["Overlay"] = 2000] = "Overlay";
    StackingIndex[StackingIndex["Modal"] = 3000] = "Modal";
})(StackingIndex || (StackingIndex = {}));
;
var mySelectStacking = StackingIndex.Dropdown;
//Function config
function resetTimer() {
    this.minutes = 24;
    this.seconds = 59;
}
function update(name) {
    return 'User Update, ' + name;
}
var test = function (name) {
    return 'I work, ' + name;
};
// Two functions with the same typing but different logic
function sayHello(input) {
    return 'Hello ' + input;
}
//Duplicate functions  : Overloaded ?
/*
function sayHello(input: number): string {
    return 'Data ' + input;
}
*/
function sayGreet(input, data) {
    return 'User ' + input;
}
//call functions
//sayGreet("hh");
//sayGreet(123);
//sayGreet("dd",true);
sayGreet(22, true);
sayGreet(22, "dggd");
var User = (function () {
    function User() {
    }
    User.prototype.myMethod = function (a, b) {
        alert(a.toString());
    };
    return User;
}());
var obj = new User();
//obj.myMethod();
obj.myMethod("ss");
obj.myMethod(12);
obj.myMethod(12, "dd");
//obj.myMethod(true,"dd");
function TestData(input) {
    return 'Hi ' + input;
}
// Here we declare the variable with its function type
var greetMe;
// Last, we assign a function to the variable
greetMe = sayHello;
//Function with optional parameter argument
//Function with default value for parameter
function testMe(name, greeting) {
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + name;
}
testMe("Iss");
testMe("Iss", "Welcome");
//testMe("Iss",true);
//The type of a is either string or number.
function useMe(a, b) {
    alert(a.toString());
}
//Overloaded method calls
useMe(123, "");
useMe(12);
useMe("Ge");
//useMe(true);
//Define array parm
function uiTest(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + ', ' + names.join(' and ') + '!';
}
alert(uiTest('Hello', 'John', 'Ann', 'Fred'));
/*
ECMAScript 6 features supported by TypeScript:

Classes (with support for optional type annotations)
Generics
Modules
Arrow functions
Defaults parameters

*/
/*
Arrow Functions

LCalled the fat arrow (because -> is a thin arrow and => is a fat arrow) and also called a lambda function (because of other languages). Another commonly used feature is the fat arrow function ()=>something. The motivation for a fat arrow is:
No need to keep typing function keyword
It captures the meaning of this
It captures the meaning of arguments
*/
var doubleByTwo = function (x) { return x * 2; };
doubleByTwo(111);
var add = function (x, y) { return x + y; };
add(1, 89);
var addAndDouble = function (x, y) {
    var sum = x + y;
    return sum * 2;
};
addAndDouble(23, 76);
//Function returning a function
function delayedGreeting(name) {
    this.name = name;
    this.greet = function () {
        var _this = this;
        setTimeout(function () { return alert('Hello ' + _this.name); }, 0);
    };
}
var greeting = new delayedGreeting('Peter');
greeting.greet();
//Class with accessor and limited access
var Car = (function () {
    function Car(isHybrid, color) {
        if (color === void 0) { color = 'red'; }
        this.isHybrid = isHybrid;
        this.distanceRun = 0;
        this.color = color;
    }
    Car.prototype.getGasConsumption = function () {
        return this.isHybrid ? 'Very low' : 'Too high!';
    };
    Car.prototype.drive = function (distance) {
        this.distanceRun += distance;
    };
    Car.honk = function () {
        return 'HOOONK!';
    };
    /*
    get distance(): number {
      return this.distanceRun;
    }
  */
    Car.prototype.readTravelledDistance = function () {
        return this.distanceRun;
    };
    return Car;
}());
var testCar = new Car(false); // A new object of type Car is instantiated
console.log(testCar.color); // 'red'
//console.log(testCar.distance);  // 0 (public accessor returns distanceRun)
testCar.drive(15);
console.log(testCar.readTravelledDistance());
testCar.drive(21);
console.log(testCar.readTravelledDistance()); // 36 (15 + 21)
testCar.getGasConsumption(); // 'Too high!' (my car is not hybrid)
Car.honk(); // 'HOOONK!' (no object instance required)
//The following statements will throw errors upon compilation
//console.log(myCar.distanceRun);     
// Property 'distanceRun' is private and only accessible within class 'Car'.
// Accessors are only available when targeting ECMAScript 5 and higher.
//testCar.distance = 100; 
testCar.readTravelledDistance();
