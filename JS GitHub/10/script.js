'use strict';

/*//Functions. Default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price=price||199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', undefined, 15);

const flight = 'LH123';
const julia = {
  name: 'Julia Koverzneva',
  passport: 4815162342,
};
const checkIn = function (flightNum, passenger) {//'flightNum' is declared but its value is never read.
  flightNum = 'LH999';
  passenger.name = 'Ms. ' + passenger.name;
  if (passenger.passport === 4815162342) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, julia);
// console.log(flight); //LH123
// console.log(julia); ///{name: 'Ms. Julia Koverzneva', passport: 4815162342}
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(julia);
checkIn(flight, julia);

//First-Class and Higher-Order Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('✋🏼');
};
document.body.addEventListener('click', high5);
['Julia', 'Dasha', 'Xenia'].forEach(high5);

//Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};

//Rewrite using arrow functions
const greetArrow = greeting => name => console.log(`${greeting}, ${name}!`);

const greeterHey = greet('Hi');
greeterHey('Julia');
greeterHey('Dasha');

greetArrow('Hello')('Anthony');

//The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:function(){} Old way
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Julia Koverzneva');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

//The call Method
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(111, 'Laura Palmer'); Does not work
book.call(eurowings, 111, 'Laura Palmer');
console.log(eurowings);

book.call(lufthansa, 239, 'Dale Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Tony Soprano');

//The apply Method. Exactly the same but needs data to be an array.
const flightData = [583, 'Jessie Pinkman'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //Call works with arrays, too

//The bind Method. Does not immediately call the function, but return a new one where the this keyword is bound
//book.call(eurowings, 111, 'Laura Palmer');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Kim Kardashian');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Steve Harvey');

//With EventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes); //NaN. this keyword is a buy button. this keyword should point to lufthansa element, so we need to manually set it
};
// lufthansa.buyPlane();
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(2300));

//Challenge. Rewriting with function returning function
const TAX = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};
const VAT = TAX(0.23);
VAT(100);

///////CODING CHALLENGE 1 SOLUTION/////
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
//§ Data1:[5,2,3]
//§ Data2:[1,5,3,9,6,1]

//Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again!');
};
runOnce();
//IIFE
(function () {
  console.log('This will never run again!');
  const isPrivate = 23;
})(); //We made it an expression by wrapping into paretntheses

// console.log(isPrivate); //Uncaught ReferenceError: isPrivate is not defined

(() => console.log('This will also never run again!'))(); //The same but an arrow

//Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); //ƒ anonymous()

//More examples of closures
//Ex.1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f); //closure is a:23
//Re-assigning f function
h();
f();
console.dir(f); //closure is b:777
//Ex.2. Closure has priority over scope-chain
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups each with ${perGroup} passengers.`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds.`);
};
const perGroup = 1000; //works when const perGroup = n / 3; is removed. Otherwise doesn't work
boardPassengers(180, 3);
*/
// setTimeout(function () {
//   console.log('TIMER');
// }, 5000); //TIMER appears after 5sec

///////CODING CHALLENGE 2 SOLUTION/////
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
