// Initialize constants from html inputfields
const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultText = document.getElementById('result');

/// FUNTION: calculate - purpose: calculate the result between two numbers based on a specific operation
/// INPUT: Three constants as integer numbers
/// OUTPUT: One calculated result as floating point constant
function calculate() {
  const firstNumber = firstNumberInput.value;
  const secondNumber = secondNumberInput.value;
  const operator = operatorInput.value;

  // Type check for inputfields 
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultText.textContent = 'Only numbers are allowed';
    return;
  }

  // Each operator selector results in a specific calculatio
  switch (operator) {
    case '+':
      calculateResult = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      calculateResult = Number(firstNumber) - Number(secondNumber);
      break;
    case '*':
      calculateResult = Number(firstNumber) * Number(secondNumber);
      break;
    case '/':
      if (secondNumber == 0) {
        resultText.textContent = 'You can\'t divide by zero'      // CHANGE added division check
        return;
      }
      calculateResult = Number(firstNumber) / Number(secondNumber);
      break;
    case '%':
      if (secondNumber == 0) {
        resultText.textContent = 'You can\'t divide by zero'      // CHANGE added division check
        return;
      }
      calculateResult = Number(firstNumber) % Number(secondNumber);
      break;
    case '**':
      calculateResult = Number(firstNumber) ** Number(secondNumber);
      break;
    default:
      resultText.textContent = 'Operator not found';
  }
  displayResult(calculateResult);
}

// Display result in Htmlfield
function displayResult(calculateResult) {
  resultText.textContent = 'Result: ' + calculateResult; // alternative solution slightly more elegant
}

// Event listener for Htmlbutton to start calculation
calculateButton.addEventListener('click', calculate);
