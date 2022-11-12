/*// LECTURE: Values and Variables
let country = "Russia";
const continent = "Eurasia";
let population = 146000000;
console.log(country);
console.log(continent);
console.log(population);

// LECTURE: Data Types
let isIsland = false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// LECTURE: let, const and var
language = "russian";
console.log(language);
// continent = "notEurasia";

// LECTURE: Basic Operators
let russiaPopulation = 146000000;
console.log(russiaPopulation / 2);

console.log(russiaPopulation + 1);

let finlandPopulation = 6000000;
console.log(russiaPopulation > finlandPopulation);

let worldAvg = 33000000;
console.log(russiaPopulation < worldAvg);

let description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);

//LECTURE: Strings and Template Literals
let country = "Russia";
let language = "russian";
const continent = "Eurasia";
let population = 146000000;
let description = `${country} is in ${continent}, and its ${
  population / 1000000
} million people speak ${language}.`;
console.log(description);

//LECTURE: Taking Decisions: if / else Statements
let worldAvg = 33000000;
let country = "Russia";
let population = 146000000;

if (population > worldAvg) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      (worldAvg - population) / 1000000
    } million below average.`
  );
}

//LECTURE: Type Conversion and Coercion
//   '9' - '5'=4;
//  '19' - '13' + '17'=617;
//  '19' - '13' + 17=23;
//  '123' < 57=false;
//  5 + 6 + '4' + 9 - 4 - 2=117;
console.log("9" - "5"); //correct
console.log("19" - "13" + "17"); //correct
console.log("19" - "13" + 17); //correct
console.log("123" < 57); //correct
console.log(5 + 6 + "4" + 9 - 4 - 2); //wrong, 1143

//LECTURE: Equality Operators: == vs. ===
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}

//LECTURE: Logical Operators
const country = "Canada";
const language = "english";
const continent = "North America";
const population = 49000000;

if (
  language === "english" &&
  population < 50000000 &&
  (continent === "Eurasia" ||
    "Australia" ||
    "Africa" ||
    "North America" ||
    "South America" ||
    "Antarctida")
) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria 😢`);
}

//LECTURE: The switch Statement
const language = "hindi";
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("Second place in number of native speakers");
    break;
  case "english":
    console.log("Third place in number of native speakers");
    break;
  case "hindi":
    console.log("Fourth place in number of native speakers");
    break;
  case "arabic":
    console.log("Fifth place in number of native speakers");
    break;
  default:
    console.log("Great language too :D");
}

//LECTURE: The Conditional (Ternary) Operator
const country = "Russia";
const population = 146000000;
const avgPopulation = 33000000;
console.log(
  `${country}'s population is ${
    population > avgPopulation ? "above" : "below"
  } average.`
);

//LECTURE: Functions
function describeCountry(country, population, capitalCity) {
  const str = `${country} has ${
    population / 1000000
  } million people and its capital city is ${capitalCity}`;
  return str;
}
const finland = describeCountry("Finland", 6000000, "Helsinki");
console.log(finland);

const russia = describeCountry("Russia", 146000000, "Moscow");
console.log(russia);

//LECTURE: Function Declarations vs. Expressions
//Function Declaration
function percentageOfWorld1(population, worldPopulation) {
  return (population / worldPopulation) * 100;
}
const percentageOfWorld = percentageOfWorld1(146, 7900);
console.log(percentageOfWorld);

//Function Expression
const percentageOfWorld1 = function (population, worldPopulation) {
  return (population / worldPopulation) * 100;
};
const percentageOfWorld = percentageOfWorld1(133, 7900);
console.log(percentageOfWorld);

//LECTURE: Arrow Functions
const percentageOfWorld3 = (population, worldPopulation) =>
  (population / worldPopulation) * 100;
const percentageOfWorld = percentageOfWorld3(146, 7900);
console.log(percentageOfWorld);

//LECTURE: Functions Calling Other Functions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentageOfWorld = percentageOfWorld1(population);
  const str = `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world.`;
  return str;
}
console.log(describePopulation("Russia", 146));

//LECTURE: Introduction to Arrays
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const populations = [33, 146, 49, 1481];
console.log(populations.length === 4);
const percantages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations.length - 1),
];
console.log(percantages);

//LECTURE: Basic Array Operations (Methods)
const neighbours = ["Norway", "Finland", "Sweden", "Estonia", "Ukraine"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
if (neighbours.includes("Germany")) {
} else {
  console.log("Probably not a central European country 😄");
}
console.log(neighbours.indexOf("Sweden"));
neighbours[2] = "Republic of Sweden";
console.log(neighbours);

//LECTURE: Introduction to Objects
const myCountry = {
  country: "Russia",
  capital: "Moscow",
  language: "russian",
  population: 146,
  neighbours: ["Finland", "Belarus", "Norway"],
};
//LECTURE: Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry.population);

//Object Methods
const myCountry = {
  country: "Russia",
  capital: "Moscow",
  language: "russian",
  population: 146,
  neighbours: ["Finland", "Belarus", "Norway"],
  checkIsland: function () {
    return this.neighbours.length >= 1 ? true : false;
  },
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
};
myCountry.describe();
myCountry.checkIsland();

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//LECTURE: Iteration: The for Loop
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting.`);
}

//Looping Arrays, Breaking and Continuing

const populations = [33, 146, 49, 1481];
percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(populations[i] / 79);
}
console.log(percentages2);

//LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}

//LECTURE: The while Loop
const populations = [33, 146, 49, 1481];
percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(populations[i] / 79);
  i++;
}
console.log(percentages3);
*/
