import { operate, changeSign } from "./calculator.js";

let display = document.querySelector("#display");

let numbers = [];
let operator = undefined;
let clearDisplay = false;

const addNumber = (num) => numbers.push(num);
const changeOperator = (opt) => (operator = opt);
const changeDisplay = (content) => (display.value = content);
const clear = () => {
    changeDisplay("");
    numbers = [];
    operator = undefined;
};

const calculate = () => {
    let [a, b] = numbers; // Get values and operator
    let result = operate(operator, parseFloat(a), parseFloat(b));
    numbers = [];
    operator = undefined;
    return result;
};

const buttonsElements = document.querySelectorAll(".btn");
buttonsElements.forEach((button) => {
    if (button.id != "equals" && button.id != "sign" && button.id != "clear") {
        button.addEventListener("click", (event) => {
            if (clearDisplay) {
                display.value = "";
                clearDisplay = false;
            }

            display.value += event.target.innerHTML;
        });
    }
});

const operatorsElements = document.querySelectorAll(".operator");
operatorsElements.forEach((calculatorOperator) => {
    calculatorOperator.addEventListener("click", (event) => {
        event.target.focus();

        if (operator != undefined) {
            addNumber(display.value);
            let result = calculate();
            changeDisplay(result); // Calculate the result
        }

        changeOperator(event.target.innerHTML);
        addNumber(display.value);
        clearDisplay = true;
    });
});

document.querySelector("#clear").addEventListener("click", () => clear());

document.querySelector("#equals").addEventListener("click", (event) => {
    addNumber(display.value);
    let result = calculate();
    changeDisplay(result); // Calculate the result
});

document.querySelector("#sign").addEventListener("click", () => {
    display.value = changeSign(display.value);
});
