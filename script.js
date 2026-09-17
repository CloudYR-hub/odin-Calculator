function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
let firstNumber;
let secondNumber;
let operation;

function operate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    add(firstNumber, secondNumber);
  } else if (operator === "-") {
    subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    multiply(firstNumber, secondNumber);
  } else {
    divide(firstNumber, secondNumber);
  }
}
