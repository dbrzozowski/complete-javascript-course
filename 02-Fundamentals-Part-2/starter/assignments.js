'use strict';

// LECTURE: Functions
/* function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const finland = describeCountry('Finland', 6, 'Helsinki');
const poland = describeCountry('Poland', 38, 'Warsaw');
const hungary = describeCountry('Hungary', 9.6, 'Budapest');

console.log(finland);
console.log(poland);
console.log(hungary);
 */

// LECTURE: Function Declarations vs. Expressions
/* 
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const finland = percentageOfWorld1(6);
const poland = percentageOfWorld1(38);
const hungary = percentageOfWorld1(9.6);

console.log(finland);
console.log(poland);
console.log(hungary);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const finland2 = percentageOfWorld2(6);
const poland2 = percentageOfWorld2(38);
const hungary2 = percentageOfWorld2(9.6);

console.log(finland2);
console.log(poland2);
console.log(hungary2); 
*/

// LECTURE: Arrow Functions
/* 
const percentageOfWorld3 = (population) => (population / 7900) * 100; 
*/

// LECTURE: Functions Calling Other Functions
/* function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}

console.log(describePopulation('Finland', 6));
console.log(describePopulation('Poland', 38));
console.log(describePopulation('Hungary', 9.6)); */

// LECTURE: Introduction to Arrays
/* const population = [6, 38, 9.6, 10];

if (population.length >= 4) {
  console.log('Population has 4 or more items');
} else console.log('Population has less than 4 items');

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3]),
];
console.log('>>> / percentages', percentages);
 */

// LECTURE: Basic Array Operations (Methods)
/* const neighbors = [
  'Czech Republic',
  'Slovakia',
  'Germany',
  'Belarus',
  'Lithuania',
];
console.log(neighbors);
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop('Utopia');
console.log(neighbors);

if (!neighbors.includes('Germany')) {
  console.log('Probably not a central European country :D');
} else console.log('Your country is in central European');

const indexOfLithuania = neighbors.indexOf('Lithuania');
neighbors[indexOfLithuania] = 'Brazil';

console.log(neighbors); */

// LECTURE: Introduction to Objects
/* const myCountry = {
  country: 'Poland',
  capital: 'Warsaw',
  language: 'polish',
  population: 38,
  neighbors: ['Czech Republic', 'Slovakia', 'Germany', 'Belarus', 'Lithuania'],
};
 */

// LECTURE: Dot vs. Bracket Notation
// Challenge from video
/* 
const jonas = {
  firstName: 'Jonas',
  lastName: 'Gold',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
 */

// Assignment from pdf
/* const myCountry = {
  country: 'Poland',
  capital: 'Warsaw',
  language: 'polish',
  population: 38,
  neighbors: ['Czech Republic', 'Slovakia', 'Germany', 'Belarus', 'Lithuania'],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log('>>>', myCountry.population);

myCountry['population'] -= 2;
console.log('>>>', myCountry.population);
 */

// 44 Object methods
// Challenge
// "Jonas is a 39-year old teacher, and has a driver's license"
/* const jonas = {
  firstName: 'Jonas',
  lastName: 'Gold',
  birthYear: 1983,
  age: function () {
    return 2022 - this.birthYear;
  },
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  getSummary: function () {
    return `${this.firstName} is a ${this.age()}-year old ${
      this.job
    }, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

console.log(jonas.getSummary()); */

// LECTURE: Object Methods
/* 1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property. */

/* const myCountry = {
  country: 'Poland',
  capital: 'Warsaw',
  language: 'polish',
  population: 38,
  neighbors: ['Czech Republic', 'Slovakia', 'Germany', 'Belarus', 'Lithuania'],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`;
  },
  checkIsLand: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};
console.log(myCountry.describe());
myCountry.checkIsLand();
console.log(myCountry.isIsland); */

// LECTURE: Iteration: The for Loop
/* 1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting' */

/* for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
} 
*/

// LECTURE: Looping Arrays, Breaking and Continuing
/* 1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is */

/* const population = [6, 38, 9.6, 10];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i < population.length; i++) {
  percentages2.push(percentageOfWorld1(population[i]));
}

console.log(percentages2);
 */

// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway 😉

/* const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
  for (let j = 0; j <= listOfNeighbours[i].length - 1; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
} */

// LECTURE: The while Loop
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

/* const population = [6, 38, 9.6, 10];
const percentages3 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let i = 0;
while (i < population.length) {
  percentages3.push(percentageOfWorld1(population[i]));
  i++;
}

console.log(percentages3); */
