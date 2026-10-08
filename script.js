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
let dotClicked = false;
let buttons = document.querySelectorAll(".numberButton");
let calculateButton = document.getElementById("calculateButton");
let clearButton = document.getElementById("clearButton");
let operations = document.querySelectorAll(".operationButton");
let input = document.getElementById("input");
let dotButton = document.querySelector(".dotButton");

console.log(input);
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!operation && clicked) {
      input.value = "";
      firstNumber = "";
      secondNumber = "";
      firstNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
      clicked = false;
    } else if (!operation) {
      firstNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
    } else if (operation) {
      secondNumber += e.target.innerHTML;
      input.value += e.target.innerHTML;
    }
    console.log(`First number: ${firstNumber}`);
    console.log(`Second number: ${secondNumber}`);
  });
});
dotButton.addEventListener("click", (e) => {
  if (!operation && clicked && !firstNumber.includes(".")) {
    input.value = "";
    firstNumber = "";
    secondNumber = "";
    firstNumber += e.target.innerHTML;
    input.value += e.target.innerHTML;
    clicked = false;
  } else if (!operation && !firstNumber.includes(".")) {
    firstNumber += e.target.innerHTML;
    input.value += e.target.innerHTML;
  } else if (operation && !secondNumber.includes(".")) {
    secondNumber += e.target.innerHTML;
    input.value += e.target.innerHTML;
    dotClicked = true;
  }
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
      dotClicked = false;
    }
  });
});
function operate(firstNumber, secondNumber, operator) {
  if (operator === "+") {
    return add(firstNumber, secondNumber).toFixed(1);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber).toFixed(1);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber).toFixed(1);
  } else {
    if (secondNumber === "0") {
      return (input.value = "Cannot divide from 0");
    } else {
      return divide(firstNumber, secondNumber).toFixed(1);
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
  dotClicked = false;
});
clearButton.addEventListener("click", () => {
  input.value = "";
  operation = "";
  firstNumber = "";
  secondNumber = "";
  dotClicked = false;
  clicked = false;
});
document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key === "Backspace") {
    input.value.slice(0, -1);
    input.focus();
  } else if (key === "Enter") {
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
    dotClicked = false;
  } else if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9" ||
    key === "0"
  ) {
    if (!operation && clicked) {
      input.value = "";
      firstNumber = "";
      secondNumber = "";
      firstNumber += key;
      input.value += key;
      clicked = false;
    } else if (!operation) {
      firstNumber += key;
      input.value += key;
    } else if (operation) {
      secondNumber += key;
      input.value += key;
    }
    console.log(`First number: ${firstNumber}`);
    console.log(`Second number: ${secondNumber}`);
  } else if (key === ".") {
    if (!operation && clicked && !firstNumber.includes(".")) {
      input.value = "";
      firstNumber = "";
      secondNumber = "";
      firstNumber += key;
      input.value += key;
      clicked = false;
    } else if (!operation && !firstNumber.includes(".")) {
      firstNumber += key;
      input.value += key;
    } else if (operation && !secondNumber.includes(".")) {
      secondNumber += key;
      input.value += key;
      dotClicked = true;
    }
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    if (!operation) {
      operation = key;
      input.value += key;
    } else if (operation) {
      let result = operate(firstNumber, secondNumber, operation);
      secondNumber = "";
      operation = key;
      input.value = result + operation;
      firstNumber = result;
      dotClicked = false;
    }
  }
});
