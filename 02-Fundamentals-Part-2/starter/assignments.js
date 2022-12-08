'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const finland = describeCountry('Finland', 6, 'Helsinki');
const poland = describeCountry('Poland', 38, 'Warsaw');
const hungary = describeCountry('Hungary', 9.6, 'Budapest');

console.log(finland);
console.log(poland);
console.log(hungary);
