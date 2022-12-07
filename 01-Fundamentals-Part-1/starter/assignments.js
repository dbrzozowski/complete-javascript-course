// Values and Variables
/* 
let country = 'Portugal';
let continent = 'Europe';
let population = 10;
console.log(country);
console.log(continent);
console.log(population); */

// Data types
/* 
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

// let, const and var
/* 
language = 'portuguese';
const country = 'Portugal';
const continent = 'Europe';
const isIsland = false;
isIsland = true; */

// Basic operators
/* 
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;
console.log(description1); */

// Strings and Tmplate Literals
/* 
const country = 'Portugal';
const continent = 'Europe';
const isIsland = false;
const language = 'portuguese';

let population = 10;
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log('>>> / description', description); 
*/

// Taking decisions: if / else statements
/*
const country = 'Portugal';
let population = 10;

if (population > 30) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
} 
*/

// Type converison and coersion
/*
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
 */

// Equlaity Operators: == vs. ===
/* const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else if (numNeighbours === 0) {
  console.log('No borders');
} */

// Logical Operators
/* const hasEnglish = false;
const population = 37;
const isIsland = false;

if (hasEnglish && population < 50 && isIsland) {
  console.log('You should live in Poland 😃');
}
console.log('Poland does not meet your criteria 😥'); 
*/

//Switch statement
/* const day = 'monday';

switch (day) {
  case 'monday':
    console.log('This is monday');
    break;
  case 'tuesday':
  case 'wednesday':
    console.log('This is tuesday or wednesday');
    break;
  case 'thursday':
    console.log('This is tuesday or thursday');
    break;
  case 'friday':
    console.log('This is tuesday or friday');
    break;
  case 'saturday':
  case 'sunday':
    console.log('This is saturday or sunday');
    break;
  default:
    console.log('Not a valid day');
}

// Same as above but in if statement
if (day === 'monday') {
  console.log('This is monday');
} else if (day === 'tuesday' || day === 'wednesday') {
  console.log('This is tuesday or wednesday');
} else if (day === 'thursday') {
  console.log('This is Thursday');
} else if (day === 'friday') {
  console.log('This is Friday');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('This is Saturday or Sunday');
}
 */

/* switch (language) {
  case 'chinese':
    console.log('MOST number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too');
} */

// Ternary operator
/* 
const population = 30;
const aboveBelow = population > 33 ? 'above' : 'below';
console.log(`Portugal's population is ${aboveBelow} average`);
 */
