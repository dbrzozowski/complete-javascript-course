'use strict';

const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtman',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
};

console.log(
	`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
