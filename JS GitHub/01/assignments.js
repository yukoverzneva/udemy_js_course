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
*/
