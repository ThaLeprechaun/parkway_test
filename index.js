import { fees } from './fees.config.json';

function computeCharge(amount) {
	let output = '';
	const chargeRange = fees.find(({ minAmount, maxAmount, feeAmount }) => {
		if (amount >= minAmount && amount <= maxAmount) {
			output = feeAmount;
			return output;
		}
	});

	return chargeRange['feeAmount'];
}

document.querySelector('#btn').onclick = function getInput() {
	let input = document.getElementById('amount').value;
	let chargedFees = computeCharge(input);
	document.getElementById('result').innerText = chargedFees;
};
