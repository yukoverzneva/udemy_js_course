"use strict"; //In strict mode there is an error message in console. With no strict mode JS fails silently.

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //script.js:6 Uncaught ReferenceError: hasDriverLicense is not defined - error in variable name. In strict mode there is an error message in console. With no strict mode JS fails silently.
if (hasDriversLicense) console.log("I can drive!");

//const interface = "Audio"; //Uncaught SyntaxError: Unexpected strict mode reserved word. JS reserved this word for future feature.
//const private = 534; //Uncaught SyntaxError: Unexpected strict mode reserved word. JS reserved this word for future feature.
//const if=23;//Uncaught SyntaxError: Unexpected token 'if' . If already is used as a statement.

///FUNCTIONS///
function logger() {
  console.log("My name is Julia");
}
logger(); //Invoking/running/calling the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
//DRY=Don't Repeat Yourself
const num = Number("23");

///FUNCTION DECLARATIONS AND EXPRESSIONS///

//Function Declaration
const age1 = calcAge1(1994); //Can be declared before function
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

//Function Expression
// const age2 = calcAge2(1994); //Can't be declared before function. script.js:42 Uncaught ReferenceError: Cannot access 'calcAge2' before initialization
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1994);
console.log(age1, age2);

///ARROW FUNCTIONS=shorter variation of function expression

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilretirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilretirement(1994, "Julia"));
console.log(yearsUntilretirement(1980, "Bob"));

//Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//FUNCTIONS REVIEW
const calcAge = function (year) {
  return 2022 - year;
};
const yearsUntilretirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
console.log(yearsUntilretirement(1994, "Julia"));
console.log(yearsUntilretirement(1909, "Anthony")); //Alredy retired. -48

////⚠️CODING CHALLENGE 1////
//test 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 41);

const checkWinner = function (avgKoalas, avgDolphins) {
  if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`Both teams failed!`);
  }
};
checkWinner(scoreKoalas, scoreDolphins);
checkWinner(0, 10);
//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreKoalas, scoreDolphins);

////ARRAYS////
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
//Way 1 of creating an array
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
//Way 2 of creating an array
const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //log to console the length of array
console.log(friends[friends.length - 1]); //log to console last element of an array

friends[2] = "Jay"; //Replace an element
console.log(friends);
// friends=["Bob","Alice"] // Illegal. Can't replace a whole array.

const firstName = "Julia";
const julia = [firstName, "Koverzneva", 2022 - 1994, friends];
console.log(julia);

//Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years = [1990, 1994, 1997, 2011, 1950];
//console.log(calcAge(years)); //Won't work. NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//Basic array operations
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); //Add elements to the end of an array. Function PUSH is attached to array with dot
console.log(friends);
console.log(newLength); // Log the length to console. Push and Unshift return the length of an array

friends.unshift("John"); //Add elements to the start of an array.
console.log(friends);

friends.pop(); //Remove last element of an array. Pop function returnes the removed element
const popped = friends.pop();
console.log(popped);

friends.shift(); //Remove fist element of an array.
console.log(friends);

console.log(friends.indexOf("Steven")); //Index of an element. -1 means there is no such element in array

friends.push(23);
console.log(friends.includes("23")); //If array includes such element. Strict equality(does not know if 23 and "23" are the same)

friends.push("Peter");
if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

////⚠️CODING CHALLENGE 2////
//Way 1
// const calcTip = function (bill) {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }
//   return tip;
// };
//Way 2
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//Way 3
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(bills);
console.log(tips);

const total = [
  tips[0] + bills[0],
  tips[1] + bills[1],
  tips[tips.length - 1] + bills[bills.length - 1],
];
console.log(total);

//ARRAY
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
//OBJECT (has properties)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIN = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends."
);
if (jonas[interestedIN]) {
  console.log(jonas[interestedIN]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends."
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Challenge ✅
//"Jonas has 3 friends, and his best friend is called Michael."
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },

  //Version 1
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  //Version 2. Imolementing THIS for DRY principle
  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  //Version 3. To not run a function every time we need age - just call value that was calculated once.
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
console.log(jonas.calcAge());
// console.log(jonas["calcAge"]());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 31-years old teacher and he has a driver's license."
console.log(jonas.getSummary());

////⚠️CODING CHALLENGE 3////
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "Jonh",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
  //Version 1

  getSummary: function () {
    return `${this.firstName}'s BMI (${john.calcBMI()}) is ${
      this.calcBMI() > mark.calcBMI() ? "higher" : "less"
    } than ${mark.firstName}'s (${mark.calcBMI()})!`;
  },
};

//Version 2
// if (mark.BMI > john.BMI) {
//   console.log(`${mark.firstName}'s BMI is higher than ${john.firstName}'s!`);
// } else {
//   console.log(`${john.firstName}'s BMI is higher than ${mark.firstName}'s!`);
// }

mark.calcBMI();
john.calcBMI();

console.log(john.BMI, mark.BMI);
console.log(john.getSummary());

//Iteration: The for Loop
// console.log("Lifting weights repetition 1 🏋🏼‍♂️");
// console.log("Lifting weights repetition 2 🏋🏼‍♂️");
// console.log("Lifting weights repetition 3 🏋🏼‍♂️");
// console.log("Lifting weights repetition 4 🏋🏼‍♂️");
// console.log("Lifting weights repetition 5 🏋🏼‍♂️");
// console.log("Lifting weights repetition 6 🏋🏼‍♂️");
// console.log("Lifting weights repetition 7 🏋🏼‍♂️");
// console.log("Lifting weights repetition 8 🏋🏼‍♂️");
// console.log("Lifting weights repetition 9 🏋🏼‍♂️");
// console.log("Lifting weights repetition 10 🏋🏼‍♂️");
//for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
}

//Looping Arrays, Breaking and Continuing
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];
// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// ...
// console.log(jonasArray[4]);

for (let i = 0; i < jonasArray.length; i++) {
  //Reading from jonasArray
  console.log(jonasArray[i]); //typeof jonasArray[i]);

  //Filling types array, way 1
  //types[i] = typeof jonasArray[i];

  //Filling types array, way 2
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1994, 2011, 1950, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}
console.log(ages);

//Continue and break
console.log("----ONLY STRINGS---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("----BREAK WITH NUMBER---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

//Looping backwards
const jonas = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
//Loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} repetition ${rep}`);
  }
}

//LECTURE: The while Loop
//FOR
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
}
//WHILE, does not need a counter let rep = 1;
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
  rep++;
}
//WHILE example with no need in counter, depends on random value
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  //Added this to create new values after each iteration
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

////⚠️CODING CHALLENGE 4////
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

//BONUS
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum=sum+arr[i]
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([1, 3, 4, 5]));
console.log(calcAverage(totals));
*/
