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
let buttons = document.querySelectorAll('.numberButton');
let input = document.getElementById('input');

console.log(input);
Array.from(buttons).forEach((button) =>{
  button.addEventListener('click', (e) =>{
    firstNumber = e.target.innerHTML;
    console.log(firstNumber);
    input.value += firstNumber;
  })
})
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
