'use strict';

// CODING CHALLENGE #1
/* const calcAverage = (competeOne, competeTwo, competeThree) =>
  (competeOne + competeTwo + competeThree) / 3;

// Test Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Test Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(avgDolphins);
console.log(avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins');
  }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(avgDolphins2, avgKoalas2);
 */

// CODING CHALLENGE #2

/* function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else return bill * 0.2;
}

calcTip(100);
console.log('>>> / calcTip(100)', calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log('>>> / tips', tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log('>>> / total', total);
 */

// CODING CHALLENGE #3

/* const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName}'s BMI(${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    `${mark.firstName}'s BMI(${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`
  );
} */

// CODING CHALLENGE #4
/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else return bill * 0.2;
}

function calcTotal(bill, tip) {
  return bill + tip;
}

for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTotal(bills[i], tips[i]));
}

console.log(tips, totals);

// BONUS
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log('calcAverage', calcAverage(totals)); */
