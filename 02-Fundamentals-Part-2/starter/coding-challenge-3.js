'use strict';

const mark = {
	fullName: 'Mark Miller',
	weight: 78,
	height: 1.69,
	calcBMI() {
		return this.weight / this.height ** 2;
	},
};

const john = {
	fullName: 'John Smith',
	weight: 92,
	height: 1.95,
	calcBMI() {
		return this.weight / this.height ** 2;
	},
};

if (john.calcBMI > mark.calcBMI) {
	console.log(
		`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
			mark.fullName
		}'s (${mark.calcBMI()})!`
	);
} else {
	console.log(
		`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
			john.fullName
		}'s (${john.calcBMI()})!`
	);
}
