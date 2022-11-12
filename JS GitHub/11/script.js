'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent=0
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //beforeend makes order inverted
  });
};
//Creating initials based on names with use of map method
// displayMovements(account1.movements);

//Print balance to UI
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsernames(accounts);
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

//Implementing login feature
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI a welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //Update UI (refactored displayMovements,    calcDisplayBalance, calcDisplaySummary)
    updateUI(currentAccount);
  }
});
//Implementing Transfers
btnTransfer.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  //Cleaning fields
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI (refactored displayMovements,    calcDisplayBalance, calcDisplaySummary)
    updateUI(currentAccount);
  }
});
//Loan feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    //Add movement
    currentAccount.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
    //Clear field
    inputLoanAmount = '';
  }
});
//Closing account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => (acc.username = currentAccount.username)
    );
    //Delete account
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
    //Clean fields
    inputClosePin.value = inputCloseUsername.value = '';
  }
});
/*
//The filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//The same but with for of
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
//The same but with arrow
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

//The same but with for of
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
console.log(balanceFor);

//Max value with reduce
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max); //3000

// console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
//Working With Arrays
//⚠️Coding Challenge #3
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age > 2 ? 16 + age * 4 : age * 2))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
//⚠️Coding Challenge #2
const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map(age => (age > 2 ? 16 + age * 4 : age * 2))
    .filter(age => age > 18);
  const avgAdults =
    // humanAges.reduce((acc, age) => acc + age, 0) / humanAges.length;
    humanAges.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return avgAdults;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
//⚠️Coding Challenge #1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrect = dogsJulia;
  dogsJuliaCorrect.splice(-2);
  dogsJuliaCorrect.splice(0, 1);
  const dogsBoth = dogsJuliaCorrect.concat(dogsKate);
  dogsBoth.forEach(function (age, i) {
    if (age > 3) {
      console.log(`Dog number ${i + 1}
          is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
//////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
/*//SLICE doesn't mutate original array
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); //(3) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); //(2) ['c', 'd']
console.log(arr.slice(-2)); //(2) ['d', 'e']
console.log(arr.slice(1, -2)); //(2) ['b', 'c']
console.log(arr.slice()); //(5) ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //(5) ['a', 'b', 'c', 'd', 'e']

//SPLICE mutates original array
// console.log(arr.splice(2)); //(3) ['c', 'd', 'e']
arr.splice(-1); //(4) ['a', 'b', 'c', 'd']
console.log(arr);
arr.splice(1, 2); //splice(position, number of items to delete)
console.log(arr);

//REVERSE mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //(5) ['f', 'g', 'h', 'i', 'j']

//CONCAT
const letters = arr.concat(arr2);
console.log(letters); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); //Concat but with no mutating an original array

//JOIN
console.log(letters.join(' - ')); //a - b - c - d - e - f - g - h - i - j

//The new at Method
const arr = [23, 11, 64];
console.log(arr[0]); //Way 1
console.log(arr.at(0)); //Way 2

//Getting last array element
console.log(arr[arr.length - 1]); //Way 1
console.log(arr.slice(-1)[0]); //Way 2
console.log(arr.at(-1));

console.log('Julia'.at(0));
console.log('Julia'.at(-1));

//Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('---FOREACH---');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//0: function(200)
//1: function(450)
//...

//forEach With Maps and Sets
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// //Set doesn't have keys
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
//Data Transformations: map, filter, reduce
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

//The same but with for of
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

//The same but with arrow function
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movementsUSDArrow);

//Ternary operator
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

//Chaining Methods
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositsUSD);

//The Find Method. Unlike the Filter Method it will not return a new array, but only return the 1st element in the array that satisfies the condition.
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//some and every array methods
console.log(movements);
//Includes method checks only equality
console.log(movements.includes(-130)); //true
//Some method checks SOME condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 500);
console.log(anyDeposits);

//Every returns true if all elements satisfy the condition
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov < 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
//flat(goes 1 level deep by default, but we can set depth) and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

//flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatmap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
