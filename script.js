const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultBox = document.getElementById('result');

function calculate() {
  const firstNumber = firstNumberInput.value;
  const secondNumber = secondNumberInput.value;
  //const operator = operatorInput.value;

  // Add the numbers and show in html pane
  let calculateResult = Number(firstNumber) + Number(secondNumber);
  // document.getElementById('result').innerHTML = calculateResult;   // first solution to write result to screen
  resultBox.textContent = 'Result: ' + calculateResult; // alternative solution slightly more elegant
}

calculateButton.addEventListener('click', calculate);
