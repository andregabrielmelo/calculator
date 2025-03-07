import { operations, operate } from "./calculator.js";

let display = document.querySelector("#display");

let expression = "";
const operators = operations.map((item) => item["operator"]);

const addToExpression = (item) => (expression += item);
const changeDisplay = (content) => (display.value = content);

const calculate = () => {
    let [a, operator, b] = cleanExpression(expression); // Get values and operator
    let result = operate(operator, parseFloat(a), parseFloat(b));
    changeDisplay(result); // Calculate the result
    return result;
};

function cleanExpression(expression) {
    // Remove whitespace and get all characters of the expression in a string
    let cleanedExpression = expression.replaceAll(" ", "").split("");

    // Put whitespace arround operators
    cleanedExpression = cleanedExpression.map((item) => {
        if (
            operations.find((operation) => item === operation["operator"]) !=
            undefined
        ) {
            return ` ${item} `;
        } else {
            return item;
        }
    });
    // Join all characters into string separate the expression into numbers and operators inside a array
    cleanedExpression = cleanedExpression.join("").split(" ");

    return cleanedExpression;
}

const buttonsElements = document.querySelectorAll(".btn");
buttonsElements.forEach((button) => {
    if (button.id != "equals") {
        button.addEventListener("click", (event) => {
            if (
                operators.find((item) => item === expression.at(-1)) !=
                undefined
            ) {
                changeDisplay("");
            }
            addToExpression(event.target.innerHTML);

            display.value += event.target.innerHTML;
        });
    }
});

const operatorsElements = document.querySelectorAll(".operator");
operatorsElements.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        if (cleanExpression(expression).length === 3) {
            let result = calculate();
            expression = "";
            addToExpression(result);
        }

        event.target.focus();
        addToExpression(event.target.innerHTML);
    });
});

document.querySelector("#clear").addEventListener("click", (event) => {
    changeDisplay("");
    expression = "";
});

document.querySelector("#equals").addEventListener("click", (event) => {
    calculate();
});
