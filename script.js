let num1 = null;
let num2 = null;
let operation = null;
let result = null;
let currentInput = "";

let display = document.getElementById("display");

function insertToDisplay(value) {
  currentInput += value;
  display.value =  currentInput;
}

function insertOperator(op){
  if(currentInput === "") return
  num1 = parseFloat (currentInput);
  operation = op;
  currentInput = "";
}
function calculate() {
  if(currentInput === "" || num1 === null || operation === null) return

    num2 = parseFloat(currentInput);

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Erro";
        break;
      default:
        result = "Erro";
  }
  display.value = result;
  currentInput = result.toString();
  num1 = null;
  num2 = null;
  operation = null;
}
function clean(){
  num1 = "";
  num2 = "";
  operation = "";
  result = "";
  currentInput = "";
  display.value = "";
}
function back(){
  currentInput = currentInput.slice(0, - 1);
  display.value =  currentInput;
}
