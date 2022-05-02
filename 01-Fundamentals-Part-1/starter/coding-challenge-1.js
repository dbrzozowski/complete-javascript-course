// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

let markBmi = markWeight / markHeight ** 2;
let johnBmi = johnWeight / johnHeight ** 2;

console.log('🚀 ~ file: coding-challenge-1.js ~ line 12 ~ markBmi', markBmi);
console.log('🚀 ~ file: coding-challenge-1.js ~ line 15 ~ johnBmi', johnBmi);

let markHigherBMI = markBmi > johnBmi;

console.log(
	'🚀 ~ file: coding-challenge-1.js ~ line 23 ~ markHigherBMI',
	markHigherBMI
);
