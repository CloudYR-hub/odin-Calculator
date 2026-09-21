function add(a, b) {
  return Number(a) + Number(b);
}
function subtract(a, b) {
  return Number(a) - Number(b);
}
function multiply(a, b) {
  return Number(a) * Number(b);
}
function divide(a, b) {
  return Number(a) / Number(b);
}
let firstNumber = "";
let secondNumber = "";
let operation = "";
let buttons = document.querySelectorAll('.numberButton');
let calculateButton = document.getElementById('calculateButton');
let operations = document.querySelectorAll('.operationButton');
let input = document.getElementById('input');

console.log(input);
Array.from(buttons).forEach((button) =>{
  button.addEventListener('click', (e) =>{
    if(!operation){
      firstNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
    }
    else if(operation){
      secondNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
    }
    console.log(`First number: ${firstNumber}`);
    console.log(`Second number: ${secondNumber}`);
  })
})
Array.from(operations).forEach((button) =>{
  button.addEventListener('click', (e) =>{
    operation += e.target.innerHTML;
    input.value += e.target.innerHTML;
    console.log(typeof(operation));
  })
})
function operate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else {
    return divide(firstNumber, secondNumber);
  }
}
calculateButton.addEventListener('click', (e) =>{
  input.value = "";
  let result = operate(firstNumber,secondNumber,operation);
  input.value = result;
})