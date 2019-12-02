var brand: string = 'Chevrolet';
var message: string = `Today I bought a new ${brand} car`;
var height: number = 5.6;
var flag: boolean = false;

var carBrands: string[] = ['Chevrolet', 'Ford', 'General Motors'];
var childrenAges: number[] = [8, 5, 12, 3, 1];

var distance: any;

// Assigning different value types is perfectly fine
distance = '1000km';
distance = 1000;

// Allows to combine different types
var distances: any[] = ['1000km', 1000,true];

enum Brand { Chevrolet, Cadillac, Ford, Chrysler, Dodge };
var myCar: Brand = Brand.Cadillac;

var myCarBrand: string = Brand[1];


enum BrandsReduced { Tesla = 1, GMC, Jeep };
var vehicle: BrandsReduced = BrandsReduced.Tesla;

//var myType:BrandsReduced =1;

enum StackingIndex {
    None = 0,
    Dropdown = 1000,
    Overlay = 2000,
    Modal = 3000
};
var mySelectStacking: StackingIndex = StackingIndex.Dropdown;

//Function config

function resetTimer(): void {
    this.minutes = 24;
    this.seconds = 59;
}

function update(name: string): string {
    return 'User Update, ' + name;
}

var test: (name: string) => string = function(name: string): string{
    return 'I work, ' + name;
};


// Two functions with the same typing but different logic
function sayHello(input: string): string {
    return 'Hello ' + input;
}

//Duplicate functions  : Overloaded ?
/*
function sayHello(input: number): string {
    return 'Data ' + input;
}
*/

function sayGreet(input: number,data: any): string {
    return 'User ' + input;
}

//call functions
 //sayGreet("hh");
//sayGreet(123);
//sayGreet("dd",true);
sayGreet(22,true);
sayGreet(22,"dggd");


class User {
    myMethod(a: string);
    myMethod(a: number);
    myMethod(a: number, b: string);
    myMethod(a: any, b?: string) {
        alert(a.toString());
    }
}

var obj = new User();
//obj.myMethod();
obj.myMethod("ss");
obj.myMethod(12);
obj.myMethod(12,"dd");
//obj.myMethod(true,"dd");


function TestData(input: string): string {
    return 'Hi ' + input;
}

// Here we declare the variable with its function type
var greetMe: (name: string) => string;

// Last, we assign a function to the variable
greetMe = sayHello;

//Function with optional parameter argument
//Function with default value for parameter

function testMe(name: string, greeting?: string): string {
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + name;
}

testMe("Iss");

testMe("Iss","Welcome");

//testMe("Iss",true);

//The type of a is either string or number.

function useMe(a: string | number, b?: string) {
    alert(a.toString());
}
//Overloaded method calls
useMe(123,"");
useMe(12);
useMe("Ge");
//useMe(true);

//Define array parm
function uiTest(greeting: string, ...names: string[]): string {
    return greeting + ', ' + names.join(' and ') + '!';
}

alert(uiTest('Hello', 'John', 'Ann', 'Fred'))


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

var doubleByTwo = x => x * 2;
 doubleByTwo (111);


var add = (x, y) => x + y;

add(1,89)

var addAndDouble = (x, y) => {
    var sum = x + y;
    return sum * 2;
};


addAndDouble(23,76);

//Function returning a function

function delayedGreeting(name): void {
    this.name = name;
   this.greet = function() {
        setTimeout(() => alert('Hello ' + this.name), 0);
    }

}

var greeting = new delayedGreeting('Peter')
greeting.greet();

//Class with accessor and limited access

class Car {
  private distanceRun: number = 0;
  color: string;

  constructor(public isHybrid: boolean, color: string = 'red') {
    this.color = color;
  }

  getGasConsumption(): string {
    return this.isHybrid ? 'Very low' : 'Too high!';
  }

  drive(distance: number): void {
    this.distanceRun += distance;
  }

  static honk(): string {
    return 'HOOONK!';
  }
  
  /*
  get distance(): number {
    return this.distanceRun;
  }
*/
   readTravelledDistance()
    {
         return this.distanceRun; 
  }
}

var testCar = new Car(false);   // A new object of type Car is instantiated

console.log(testCar.color);     // 'red'
//console.log(testCar.distance);  // 0 (public accessor returns distanceRun)

testCar.drive(15);
console.log(testCar.readTravelledDistance());   
testCar.drive(21);
console.log(testCar.readTravelledDistance());  // 36 (15 + 21)

testCar.getGasConsumption();    // 'Too high!' (my car is not hybrid)

Car.honk();                   // 'HOOONK!' (no object instance required)

//The following statements will throw errors upon compilation
//console.log(myCar.distanceRun);     
// Property 'distanceRun' is private and only accessible within class 'Car'.

// Accessors are only available when targeting ECMAScript 5 and higher.

//testCar.distance = 100; 

testCar.readTravelledDistance();

     

























