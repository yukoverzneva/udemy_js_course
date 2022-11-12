/* let js = "amazing";
// if (js === "amazing") alert("JS is fun!");
console.log(40 - 23 + 12 - 6);
console.log("Julia");
console.log(28);
let firstName = "Julia";
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;
// new, name are reserved variables, do not use
// dont put number as the first sign of variable name
// letters, numbers, _ and $ allowed
don't start variable name with capital, because it is object-oriented programming. BUT constant PI is used in upper-case.
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Julia");

//Changing the value of a variable (do it without the 'let')
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

//Error in typeof operator. JS defines null as an object.
console.log(typeof null);

let age = 28;
age = 29;

const birthYear = 1994;
// birthYear = 1993; Cannot reassign const:  Uncaught TypeError: Assignment to constant variable.

//const job; Cannot declare empty const variables: script.js:44 Uncaught SyntaxError: Missing initializer in const declaration

//Old way to declare variables
var job = "programmer";
job = "teacher";

//You may not declare variable at all, but it doesn't create variable in current scope
lastName = "Koverzneva";
console.log(lastName);


//Math operators
const now = 2037;
const ageJulia = now - 1994;
const ageDima = now - 2011;
console.log(ageJulia, ageDima);

console.log(ageJulia * 2, ageDima / 10, 2 ** 3);
//2**3 means 2 to the power of 3

const firstName = "Julia";
const lastName = "Koverzneva";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x+10=25
x *= 4; // x=x*4=100
x++; //x=x+1
x--; //x=x-1
x--;
console.log(x);

//Comparison operators
console.log(ageJulia > ageDima); // >, <, >=, <=
console.log(ageDima >= 18);
const isFullAge = ageDima >= 18;
console.log(now - 1994 > now - 2011);

const now = 2037;
const ageJulia = now - 1994;
const ageDima = now - 2011;
console.log(ageJulia, ageDima);
console.log(now - 1994 > now - 2011);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avgAge = (ageDima + ageJulia) / 2;
console.log(ageJulia, ageDima, avgAge);

/////⚠️ Coding Challenge 1/////

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = "Julia";
const job = "AntiFraud specialist";
const birthYear = 1994;
const year = 2022;
const jonas =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " " +
  "year old " +
  job +
  "!";
console.log(jonas);
//Template strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log("String with \n
multiple \n
lines");
console.log(`String with
multiple
lines`);

const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚙");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙂`);
}

const birthYear = 1991;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century); Doesn't work outside the block where variable is defined. Uncaught ReferenceError: century is not defined

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);*/

/////⚠️ Coding Challenge 2/////
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

/*const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!"`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!"`);
}

//Convertion
//Strings to numbers
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof NaN);
//Numbers to strings
console.log(String(23));

//Coertion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
//If doesn't work, then convert to srting
console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3); //10, converted automatically to number because of -
console.log("23" + "10" + 3); //23103, converted automatically to number because of +
console.log("23" + "10" - 3); //2307
console.log("23" * "2"); //46, converted automatically to number

//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all 😉");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height id undefined");
}

const age = 18;
if (age === 18) console.log("You just became an adult! (strict)");

if (age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("What's you favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //23===23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else if (favourite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7");
}
if (favourite !== 23) console.log("Why not 23?");

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriversLicense && hasGoodVision); //&& = AND
console.log(hasDriversLicense || hasGoodVision); //|| = or
console.log(!hasDriversLicense); //! = NOT

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

/////⚠️ Coding Challenge 3/////
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
if (avgDolphins > avgKoalas) {
  console.log("Congratulations, Dolphins!");
} else {
  console.log("Congratulations, Koalas!");
}
//Bonus 1 and 2
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;
const avgDolphins = (97 + 112 + 80) / 3;
const avgKoalas = (109 + 95 + 50) / 3;
if (avgDolphins === avgKoalas && avgKoalas >= 100 && avgDolphins >= 100) {
  console.log("It is a DRAW!");
} else if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Congratulations, Dolphins!");
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
  console.log("Congratulations, Koalas!");
} else {
  console.log("Both teams failed!");
}

const day = "monday";
switch (day) {
  case "monday": // day==="monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theoty vidoes");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}

const day = "wednesday";
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theoty vidoes");
} else if (day === ("wednesday" || "thursday")) {
  console.log("Write code examples");
} else if ((day = "friday")) {
  console.log("Record videos");
} else if (day === ("saturday" || "sunday")) {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day!");
}

//Ternary one-line operator
const age = 23;
// age >= 18;
// ? console.log("I like to drink beer 🍺")
// : console.log("I like to drink water 💧");
//Do this
const drink = age >= 18 ? "beer 🍺" : "water 💧";
console.log(drink);
//Instead of this
let drink2;
if (age >= 18) {
  drink2 = "beer 🍺";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "beer 🍺" : "water 💧"}`);

/////⚠️ Coding Challenge 4/////
const bill = 275;
// const bill = 40;
// const bill = 430;
console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100
  } and the total value ${
    bill + (bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100)
  }`
);
*/
