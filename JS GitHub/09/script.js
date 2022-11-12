'use strict';
/*const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//ES6 Enhanced Object Literals

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  nameRestaurant: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced Object Literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //We can create a function that will destructure objects
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); //B
//length
console.log(airline.length); //16
console.log('B737'.length); //4
//indexOf
console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('Portugal')); //8. -1 if did not find word in string

//Slice Method. Extracting
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air
console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal
console.log(airline.slice(-2)); //al
console.log(airline.slice(1, -1)); //AP Air Portuga
//Example
const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  seat.slice(-1) === 'B' || seat.slice(-1) === 'E'
    ? console.log('I am sorry, your seat is in the middle 😢')
    : console.log('Congratulations! Go to WC or look in the window!');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Julia'));
console.log(typeof new String('Julia')); //object
console.log(typeof new String('Julia').slice(1)); //string

//Changing the case
console.log(airline.toLowerCase());
console.log('Julia'.toUpperCase());
//Fix capitalization in name
// const passenger = 'jUlIa'; //Julia
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //Julia

//Comparing email
const email = 'hello@julia.io';
const loginEmail = '  Hello@Julia.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

//Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); //288.97$

const announcement =
  'All passengers come to boarding door 23! Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320')); //true
console.log(plane1.startsWith('Air')); //false
if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the new Airfus family');
}
//Example
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop,food and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
//Split
console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
console.log('Julia Koverzneva'.split(' ')); // ['Julia', 'Koverzneva']
const [firstName, lastName] = 'Julia Koverzneva'.split(' ');
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Ms. Julia KOVERZNEVA

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizedName('jessica ann smith davis');
capitalizedName('julia koverzneva');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Julia'.padStart(25, '+'));

//Card Masking
const cardMasked = function (card) {
  const str = card + '';
  const lastFour = str.slice(-4);
  console.log(lastFour.padStart(str.length, '*'));
};
cardMasked(4848390938988833);
cardMasked('4848390938988833');

//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5); //There are 12 planes in line ✈️✈️✈️✈️✈️
planesInLine(12); //There are 12 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
*/
// Data needed for a later exercise

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.toUpperCase().slice(0, 3);
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🚨' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replaceAll(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}

/*
/*
/////CODING CHALLENGE 4 SOLUTION/////
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
});

/*
//Sets. We can retrieve values out of a set, because there are no indexes.
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //duplicates are gone. Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set('Julia')); //Set(5) {'J', 'u', 'l', 'i', 'a'}

console.log(ordersSet.size); //3
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
ordersSet.add('Garlic Bread');
// ordersSet.clear();
console.log(ordersSet); //Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'}
//Looping over a set
for (const order of ordersSet) console.log(order);
//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//convertion from a set to an array (spread operator)
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('Julia Koverzneva').size);
//Maps. Keys in objects are strings. But in maps they are any type.
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //We are open

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest); //'Lisbon, Portugal' gone
console.log(rest.size);
// rest.clear();
// console.log(rest); //Map(0) {size: 0}

const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr)); //Test

//Creating a map with no set
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quizz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your Answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


//Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);

//console.log(restaurant.openingHours.mon.open);//Uncaught TypeError: Cannot read properties of undefined (reading 'open')

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open); //open read only if mon exists
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}!`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!'); //(2) ['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist!'); //Method does not exist!

//Arrays
const users = [{ name: 'Julia', email: 'hello@julia.io' }];
//Way 1 (a lot better)
console.log(users[0]?.name ?? 'User array empty!');
//Way 2
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty!');

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

//[key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at${open} and close at ${close}!`);
}

/*
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 23',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 22',
  starterIndex: 1,
});

// Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); //items individually looped to a console

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
/*
/////CODING CHALLENGE 3 SOLUTION/////
//1
const events = [...new Set([...gameEvents.values()])];
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
//4
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF]: ${key} ${value}`);
}

/////CODING CHALLENGE 2 SOLUTION/////
//1
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
/////CODING CHALLENGE 1 SOLUTION/////

//1
const [players1, players2] = game.players;
console.log(players1, players2);
//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored by ${players}!`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
//7
team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!');

//Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10; //{name: 'Capri', numGuests: 20}
// rest2.numGuests = rest2.numGuests || 10; //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

// rest1.numGuests ||= 10; // it is exactly rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests ||= 10; // it is exactly rest2.numGuests = rest2.numGuests || 10;

//Solving the numGuests: 0 problem. Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && 'Anonymous'; //owner: undefined
// rest2.owner = rest2.owner && 'Anonymous'; //owner: 'Anonymous'
rest1.owner &&= 'Anonymous'; //owner is not even in console
rest2.owner &&= 'Anonymous'; //owner: 'Anonymous'

console.log(rest1);
console.log(rest2);


//Nullish coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null, undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Julia'); //3. First operator is truthy, so JS did not evaluate the second one. That is what short-circuiting means
console.log('' || 'Julia');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello

// restaurant.numGuests = 25;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---AND---');
console.log(0 && 'Julia'); //0
console.log(7 && 'Julia'); //Julia

console.log('Hello' && 23 && null && 'Julia'); //null

//Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//1) Destructuring

//Spread because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr); //(4) [1, 2, 3, 4]
//Rest because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2) Functions
const add = function (...numbers) {
  //pack values back to array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //unpack values

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//Spread operator is used to expand an array to all its elements
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); //(5) [1, 2, 7, 8, 9]

console.log(...newArr); //1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Julia';
const letters = [...str, ' ', 'K.'];
console.log(letters); //(7) ['J', 'u', 'l', 'i', 'a', ' ', 'K.']
console.log(...str);
console.log(...letters);
//console.log(`${...str} K.`);//Uncaught SyntaxError: Unexpected token '...'  $ does not expect multiple values

//Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guizeppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.nameRestaurant);


//Destructuring Objects
const { nameRestaurant, openingHours, categories } = restaurant;
console.log(nameRestaurant, openingHours, categories);

const {
  nameRestaurant: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //Setting default value

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); //{a,b}=obj; Uncaught SyntaxError: Unexpected token '='. Solurion - parentheses.
console.log(a, b);

//Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables main and secondary, way 1: creating temporary variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching places main and secondary, way 2
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested desrtucturing
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1
*/
