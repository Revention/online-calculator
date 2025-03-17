const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');

function addNumbers(firstNumber, secondNumber) {
  return result = firstNumber + secondNumber;
}

function calculate() {
  const firstNumber = firstNumberInput.value;
  const secondNumber = secondNumberInput.value;
  const operator = operatorInput.value;
  let result = Number(firstNumber) + Number(secondNumber);
  console.log(result);
}

calculateButton.addEventListener('click', calculate);
