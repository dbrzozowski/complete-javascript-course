// CODING CHALLENGE 1
/* 
// Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Test Data 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// BMI = mass / height ** 2
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHeigherBMI = bmiMark > bmiJohn;

console.log('>>> bmi', bmiMark, bmiJohn, markHeigherBMI);
*/

// CODING CHALLENGE 2
/* 
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHeigherBMI = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
} 
*/

// CODING CHALLENGE 3
/* 
const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;
const minScore = 100;

// Data bonus 1
// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 123) / 3;

// Data bonus 2
// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 106) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= minScore) {
  console.log(`Dolphins wins 🐬${dolphinsScore} / 🐨${koalasScore}`);
} else if (dolphinsScore < koalasScore && koalasScore >= minScore) {
  console.log(`Koalas wins 🐨${koalasScore} / 🐬${dolphinsScore}`);
} else if (
  dolphinsScore === koalasScore &&
  koalasScore >= minScore &&
  dolphinsScore >= minScore
) {
  console.log(`Draw - both teams won 🐨${koalasScore} / 🐬${dolphinsScore}`);
} else console.log('No one wins 😿');
 */

// CODING CHALLENGE 4
/* 
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + bill * tip}`); 
*/
