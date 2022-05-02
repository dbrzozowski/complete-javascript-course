const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

let markBmi = markWeight / markHeight ** 2;
let johnBmi = johnWeight / johnHeight ** 2;

let markHigherBMI = markBmi > johnBmi;

if (markHigherBMI) {
	console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
	console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}
