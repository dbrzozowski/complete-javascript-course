const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const averageDolphinsScore =
	(dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const averageKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

if (averageDolphinsScore > averageKoalasScore) {
	console.log(`Dolphins winns! ${averageDolphinsScore}`);
} else if (averageDolphinsScore < averageKoalasScore) {
	console.log(`Koalas winns! ${averageKoalasScore}`);
} else {
	console.log(`It's a draw`);
}

// Bonus 1 && Bonus 2
console.log(`Bonus 1 && Bonus 2`);
const minScore = 100;

if (
	averageDolphinsScore > averageKoalasScore &&
	averageDolphinsScore >= minScore
) {
	console.log(`Dolphins winns!`);
} else if (
	averageDolphinsScore < averageKoalasScore &&
	averageKoalasScore >= minScore
) {
	console.log(`Koalas winns!`);
} else if (
	averageDolphinsScore === averageKoalasScore &&
	averageDolphinsScore >= minScore &&
	averageKoalasScore >= minScore
) {
	console.log(`It' a draw`);
} else {
	console.log(`No one wins 😢`);
}
