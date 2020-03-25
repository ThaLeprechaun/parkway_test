import computeCharge from './index.js';

const calculate =  document.querySelector('#btn');
calculate.addEventListener('click', ()=> {
  let input = document.getElementById('amount').value;
  let result = computeCharge(input);
  document.getElementById('result').innerText = result;
});