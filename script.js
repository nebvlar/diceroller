const d4 = document.getElementById('d4');
const d6 = document.getElementById('d6');
const d8 = document.getElementById('d8');
const d10 = document.getElementById('d10');
const d12 = document.getElementById('d12');
const d20 = document.getElementById('d20');
const d100 = document.getElementById('d100');
const results = document.getElementById('results');
const rollCheckBtn = document.getElementById('submitBtn');

d4.addEventListener('click', () => {
	const diceRoll = Math.floor(Math.random() * 4 + 1);
	const modifier = document.getElementById('modifier').value;
	const diceRollResult = parseInt(diceRoll) + parseInt(modifier);

	if (diceRoll == 1) {
		results.style.color = 'red';
	} else if (diceRoll == 4) {
		results.style.color = 'green';
	} else {
		results.style.color = 'black';
	}

	results.textContent = diceRollResult;
});

d6.addEventListener('click', () => {
	const diceRoll = Math.floor(Math.random() * 6 + 1);
	const modifier = document.getElementById('modifier').value;
	const diceRollResult = parseInt(diceRoll) + parseInt(modifier);

	if (diceRoll == 1) {
		results.style.color = 'red';
	} else if (diceRoll == 6) {
		results.style.color = 'green';
	} else {
		results.style.color = 'black';
	}

	results.textContent = diceRollResult;
});

d8.addEventListener('click', () => {
	const diceRoll = Math.floor(Math.random() * 8 + 1);
	const modifier = document.getElementById('modifier').value;
	const diceRollResult = parseInt(diceRoll) + parseInt(modifier);

	if (diceRoll == 1) {
		results.style.color = 'red';
	} else if (diceRoll == 8) {
		results.style.color = 'green';
	} else {
		results.style.color = 'black';
	}

	results.textContent = diceRollResult;
});

d10.addEventListener('click', () => {
	const diceRoll = Math.floor(Math.random() * 10 + 1);
	const modifier = document.getElementById('modifier').value;
	const diceRollResult = parseInt(diceRoll) + parseInt(modifier);

	if (diceRoll == 1) {
		results.style.color = 'red';
	} else if (diceRoll == 10) {
		results.style.color = 'green';
	} else {
		results.style.color = 'black';
	}

	results.textContent = diceRollResult;
});

d12.addEventListener('click', () => {
	const diceRoll = Math.floor(Math.random() * 12 + 1);
	const modifier = document.getElementById('modifier').value;
	const diceRollResult = parseInt(diceRoll) + parseInt(modifier);

	if (diceRoll == 1) {
		results.style.color = 'red';
	} else if (diceRoll == 12) {
		results.style.color = 'green';
	} else {
		results.style.color = 'black';
	}

	results.textContent = diceRollResult;
});

d20.addEventListener('click', () => {
	const diceRoll = Math.floor(Math.random() * 20 + 1);
	const modifier = document.getElementById('modifier').value;
	const diceRollResult = parseInt(diceRoll) + parseInt(modifier);

	if (diceRoll == 1) {
		results.style.color = 'red';
	} else if (diceRoll == 20) {
		results.style.color = 'green';
	} else {
		results.style.color = 'black';
	}

	results.textContent = diceRollResult;
});

d100.addEventListener('click', () => {
	const diceRoll = Math.floor(Math.random() * 100 + 1);
	const modifier = document.getElementById('modifier').value;
	const diceRollResult = parseInt(diceRoll) + parseInt(modifier);

	if (diceRoll == 1) {
		results.style.color = 'red';
	} else if (diceRoll == 4) {
		results.style.color = 'green';
	} else {
		results.style.color = 'black';
	}

	results.textContent = diceRollResult;
});

function rollCheck(event) {
	event.preventDefault;
	const diceAmount = document.getElementById('diceAmount').value;
	const diceSides = document.getElementById('diceSize').value;
	const diceModifier = document.getElementById('diceModifier').value;
	const checkResults = document.getElementById('rollCheckResult');
	const checkRoll = Math.floor(Math.random() * diceSides + 1);

	multiplyDice = checkRoll * diceAmount;
	diceResult = multiplyDice + parseInt(diceModifier);
	checkResults.textContent = diceResult;

	if (checkRoll === 1) {
		checkResults.style.color = 'red';
	} else {
		checkResults.style.color = 'black';
	}
}
function diceStat() {
	stats = [];

	const stat1 = Math.floor(Math.random() * 6 + 1);
	const stat2 = Math.floor(Math.random() * 6 + 1);
	const stat3 = Math.floor(Math.random() * 6 + 1);
	const stat4 = Math.floor(Math.random() * 6 + 1);
	const stat5 = Math.floor(Math.random() * 6 + 1);

	stats.push(stat1);
	stats.push(stat2);
	stats.push(stat3);
	stats.push(stat4);
	stats.push(stat5);

	return stats;
}

function removeMin() {
	diceStat();
	res = stats.sort((a, b) => a - b).slice(2, 5);
	return res;
}

function addStat() {
	removeMin();
	const add = (a, b) => a + b;
	const sum = res.reduce(add);
	return sum;
}

function rollStat() {
	const results = document.getElementById('total');
	const stat1Result = document.getElementById('stat1');
	const stat2Result = document.getElementById('stat2');
	const stat3Result = document.getElementById('stat3');
	const stat4Result = document.getElementById('stat4');
	const stat5Result = document.getElementById('stat5');
	const stat6Result = document.getElementById('stat6');

	stat1 = addStat();
	stat2 = addStat();
	stat3 = addStat();
	stat4 = addStat();
	stat5 = addStat();
	stat6 = addStat();

	const total =
		parseInt(stat1) +
		parseInt(stat2) +
		parseInt(stat3) +
		parseInt(stat4) +
		parseInt(stat5) +
		parseInt(stat6);

	stat1Result.textContent = stat1;
	stat2Result.textContent = stat2;
	stat3Result.textContent = stat3;
	stat4Result.textContent = stat4;
	stat5Result.textContent = stat5;
	stat6Result.textContent = stat6;

	results.textContent = 'Total: ' + total;
}
