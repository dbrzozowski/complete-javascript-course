'use strict';

const calcAverage = (score1, score2, score3) => {
	return (score1 + score2 + score3) / 3;
};

const dolphinsAverageData1 = calcAverage(44, 23, 71);
const koalasAverageData1 = calcAverage(65, 54, 49);
const dolphinsAverageData2 = calcAverage(85, 54, 41);
const koalasAverageData2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins wins ${avgDolphins} vs. ${avgKoalas}`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas wins ${avgKoalas} vs. ${avgDolphins}`);
	} else {
		console.log(`No one wins`);
	}
}

checkWinner(dolphinsAverageData1, koalasAverageData1);
checkWinner(dolphinsAverageData2, koalasAverageData2);
