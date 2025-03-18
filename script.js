const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');

function calculate() {
  const firstNumber = firstNumberInput.value;
  const secondNumber = secondNumberInput.value;
  //const operator = operatorInput.value;

  // Add the numbers and show in html pane
  let calculateResult = Number(firstNumber) + Number(secondNumber);
  document.getElementById('result').innerHTML = calculateResult;
}

calculateButton.addEventListener('click', calculate);
