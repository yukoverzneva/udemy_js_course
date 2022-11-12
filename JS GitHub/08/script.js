'use strict';
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);
  function printAge() {
    let output = `${firstName}! You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variable with some name as outer scope's variable
      const firstName = 'Steven'; //JS takes the name that is nearest in the current scope

      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
      //Reassigning outer scope's variable
      output = 'New output!'; //Redefined variable inside a scope

      //const firstName = 'Julia'; Uncaught ReferenceError: Cannot access 'firstName' before initialization
    }
    //console.log(str);Uncaught ReferenceError: str is not defined
    console.log(millenial); //var is function scoped, not block-scoped, so it works outside block
    //add(2, 3);Uncaught ReferenceError: add is not defined
    //console.log(add(2, 3)); Works when strick mode is off
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
//console.log(age);//Uncaught ReferenceError: age is not defined*/

/*//Variables
console.log(me); //undefined
console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization
console.log(year); //Uncaught ReferenceError: Cannot access 'year' before initialization

var me = 'Julia';
let job = 'AntiFraud Analyst';
const year = 1994;

//Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 4)); //const - Uncaught ReferenceError: Cannot access 'addExpr' before initialization; var - Uncaught TypeError: addExpr is not a function
console.log(addArrow(2, 5)); //const - Uncaught ReferenceError: Cannot access 'addArrow' before initialization; var - Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}
const / var addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10; //All products deleted! even though it's 10. It's because of hoisting, numProducts in fact is undefined. Do not use var to declare variables! And declare them at the top of each scope.

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
//Testing if a variable is in window object
console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false


//The this Keyword in Practice
// console.log(this); //window

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); //Undefined, it is function's own this keyword
};
calcAge(1994);

//Arrow function
const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  // console.log(this); //window, it is this keyword of a parent scope
};
calcAgeArrow(1995);

//this keyword inside of method. The reason that this keyword will point to julia is beecause is the object calling that method (str. 100)
const julia = {
  year: 1994,
  calcAge: function () {
    // console.log(this); //julia object
    console.log(2022 - this.year); //27
  },
};
julia.calcAge();

//this keyword will still point to dasha even if the method is inside of the julia object
const dasha = {
  year: 1997,
};
dasha.calcAge = julia.calcAge;
dasha.calcAge();

//Taking the function out of julia object
const f = julia.calcAge;
f(); // Uncaught TypeError: Cannot read properties of undefined (reading 'year'). Because there is no owner of the function, this keyword is undefined.

//Regular Functions vs. Arrow Functions, str 116-149
var firstName = 'Dasha';
var firstName;
const julia = {
  firstName: 'Julia',
  year: 1994,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    //Example. Function inside a method
    //   const self = this; //self or that solution 1
    //   const isMillenial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //     // console.log(this.year >= 1981 && this.year <= 1996);
    //   }; //Uncaught TypeError: Cannot read properties of undefined (reading 'year')
    //   isMillenial();
    // },

    //Solution 2
    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`); //When ARROW: Hey undefined.Because arrow function does not get it on this keyword. It will simply use this keyword from surroundings (from global scope, that is the window object).
  },
};
julia.greet();
julia.calcAge();

Regular Functions vs. Arrow Functions
var firstName = 'Dasha';//Do not use var, use const and let.

const julia = {
  firstName: 'Julia',
  year: 1994,
  calcAge: function () {
    // console.log(this);
    // console.log(2022 - this.year);
    // //Ex: Function inside of a method
    // const self = this; //Solution 1: Adding an extra variable
    // const isMillenial = function () {
    //   console.log(self);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2: Using an arrow function, because arrow function has no own this keyword.Arrow would use this from parent scope.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); //Uncaught TypeError: Cannot read properties of undefined
  },
  //   greet: () => {
  //     console.log(this); //In console window firstName = 'Dasha. Var creates property in the global object.
  //     console.log(`Hey, ${this.firstName}!`);
  //   }, //Hey, undefined! Arrow function does not work with this keyword. Arrow would use this keyword from surroundings (from the global scope).
  // };//Do not use arrow, use regular function instead.
  greet: function () {
    console.log(this);
    console.log(`Hey, ${this.firstName}!`);
  },
};
julia.greet();
julia.calcAge();

//arguments keyword exists only in regular functions, but not in arrow functions.
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments); //Uncaught ReferenceError: arguments is not defined
  return a + b;
};
addArrow(2, 5, 8);

//Primitives vs. Reference Types
//Primitive values example
let age = 30;
let oldAge = age; //points to age address with age value of 30
age = 31; //creates another address in call stack with new age value.
console.log(age); //31
console.log(oldAge); //30

//Reference values example
const me = {
  name: 'Julia',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend); //age=27
console.log('Me', me); //age=27
//me and friend point to exact same object in memory heap. No changes in call stack age value.

//Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; //can change because it is changing value in heap, npt in call stack
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {};//not allowed bacause it is a const

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'], //points to the memory heap - that is why Object.assign would not work
};

const jessicaCopy = Object.assign({}, jessica2); //Object.assign only works in the 1st level. Array in jessica2 also changed when we added family members for jessicaCopy. Solution is to create deep clone with external library.
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/
