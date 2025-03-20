const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultText = document.getElementById('result');      // CHANGE constant name

function calculate() {
  const firstNumber = firstNumberInput.value;
  const secondNumber = secondNumberInput.value;
  const operator = operatorInput.value;

  // CHANGE Removed the type check from the HTML file and want to put it in the javascript file
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultText.textContent = 'Only numbers are allowed';
    return;  // exit the calcuate function
  }

  // Add the numbers and show it in the html field
  // selection based on the operator
  // TODO I prefer switch but first just make it work
  if (operator == '+') {
    let calculateResult = Number(firstNumber) + Number(secondNumber);
    displayResult(calculateResult);
  } else if (operator == '-') {
    let calculateResult = Number(firstNumber) - Number(secondNumber);
    displayResult(calculateResult);
  } else if (operator == '*') {
    let calculateResult = Number(firstNumber) * Number(secondNumber);
    displayResult(calculateResult);
  } else if (operator == '/') {
    if (secondNumber == 0) {
      resultText.textContent = 'You can\'t divide by zero'      // CHANGE added division check
      return;
    }
    let calculateResult = Number(firstNumber) / Number(secondNumber);
    displayResult(calculateResult);
  } else if (operator == '%') {
    if (secondNumber == 0) {
      resultText.textContent = 'You can\'t divide by zero'      // CHANGE added division check
      return;
    }
    let calculateResult = Number(firstNumber) % Number(secondNumber);
    displayResult(calculateResult);
  } else if (operator == '**') {
    let calculateResult = Number(firstNumber) ** Number(secondNumber);
    displayResult(calculateResult);
  } else {
    displayResult("not found");
  }

  // document.getElementById('result').innerHTML = calculateResult;   // first solution to write result to screen
  function displayResult(calculateResult) {
    resultText.textContent = 'Result: ' + calculateResult; // alternative solution slightly more elegant
  }
}

calculateButton.addEventListener('click', calculate);
