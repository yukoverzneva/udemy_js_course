// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//Problem 1:
//We work for a company building a smart home thermometer. Our most recent task is: "Given an array of tempetatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//1️⃣ Understanding the problem
//What is temperature amplitude? Answer: difference between highest and lowest temperature
//How to comput max and min?
//What is a sensor error? And what to do?
//2️⃣ Break up into sub-problems
//How to ignore errors?
//Find max value in temp array.
//Find min value in temp array.
//Substract min from max(temperature amplitude) and return it.
/*const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; ++i) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max-min;
};
const tempAmplitude = calcTempAmplitude(temperatures);
console.log(`Temperature amplitude is ${tempAmplitude}`);
//Problem 2:
//Function should now receive 2 arrays of temperatures.

//1️⃣Understanding the problem
//With 2 arays, should we implement functionality twice? Answer: NO, just merge 2 arrays.
//2️⃣ Break up into sub-problems
//Merge 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; ++i) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const tempAmplitudeNew = calcTempAmplitudeNew([3, 5, 1], [0, 1, 9]);
console.log(`Temperature amplitude is ${tempAmplitudeNew}`);

//DEBUGGING WITH THE CONSOLE AND BREAKPOINTS
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  //console.log(measurement);
  console.table(measurement);
  // Prompt always returns a string!

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = 0;
  let min = 0;
  //Console now says that min is 0, it is a bug

  //Call a debugger to console
  debugger;

  for (let i = 1; i < temps.length; ++i) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const tempAmplitudeBug = calcTempAmplitudeBug([3, 5, 9], [9, 4, 6]);

console.log(`Temperature amplitude is ${tempAmplitudeBug}`);
*/
// ⚠️Coding challenge 1
//1️⃣Understanding the problem
//Array transformed to string separated by ...
//What is thw X days? Answer: i+1
//2️⃣ Break up into sub-problems
//Transform array into a string
//Transform each element to string with \u00b0C
//String needs to contaib day (i+1)
//Add ... between elements and start an end os srting
// const data1 = [17, 21, 23];
const data1 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}\u00b0C in ${[i + 1]} days...`;
  }
  return '...' + str;
};
console.log(printForecast(data1));
//BONUS
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum=sum+arr[i]
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
