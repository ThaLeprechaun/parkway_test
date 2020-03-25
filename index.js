const data = require('./fees.config.json');

export default function computeCharge(amount) {
  let output = '';
  data.fees.find(({ minAmount, maxAmount, feeAmount }) => {
    if(amount >= minAmount && amount <= maxAmount) {
      return output = feeAmount;
    }
  });
  return output;
}
// module.exports = computeCharge();
