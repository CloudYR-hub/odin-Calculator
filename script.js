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
let clicked = false;
let buttons = document.querySelectorAll(".numberButton");
let calculateButton = document.getElementById("calculateButton");
let clearButton = document.getElementById("clearButton");
let operations = document.querySelectorAll(".operationButton");
let input = document.getElementById("input");

console.log(input);
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!operation && clicked) {
      input.value = "";
      firstNumber = "";
      secondNumber = "";
      firstNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
    } else if (!operation) {
      firstNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
    }
    else if(operation){
      secondNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
    }
    console.log(`First number: ${firstNumber}`);
    console.log(`Second number: ${secondNumber}`);
  });
});
Array.from(operations).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!operation) {
      operation = e.target.innerHTML;
      input.value += e.target.innerHTML;
    } else if (operation) {
      let result = operate(firstNumber, secondNumber, operation);
      secondNumber = "";
      operation = e.target.innerHTML;
      input.value = result + operation;
      firstNumber = result;
    }
  });
});
function operate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    return Number.parseFloat(add(firstNumber, secondNumber)).toFixed(0);
  } else if (operator === "-") {
    return Number.parseFloat(subtract(firstNumber, secondNumber)).toFixed(0);
  } else if (operator === "*") {
    return Number.parseFloat(multiply(firstNumber, secondNumber)).toFixed(0);
  } else {
    if (secondNumber === "0") {
      return (input.value = "Cannot divide from 0");
    } else {
      return Number.parseFloat(divide(firstNumber, secondNumber)).toFixed(0);
    }
  }
}
calculateButton.addEventListener("click", (e) => {
  if (!operation || !firstNumber || !secondNumber) {
    return;
  }
  input.value = "";
  let result = operate(firstNumber, secondNumber, operation);
  input.value = result;
  secondNumber = "";
  operation = "";
  firstNumber = result;
  clicked = true;
});
clearButton.addEventListener("click", () => {
  input.value = "";
  operation = "";
  firstNumber = "";
  secondNumber = "";
});
