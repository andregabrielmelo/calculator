const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b != 0 ? a / b : "ERROR");

const cleanExpression = (expression) => {
    operators = ["+", "-", "x", "/"];

    let cleanedExpression = expression.replaceAll(" ", ""); // remove all white space
    cleanedExpression = cleanedExpression.split(""); // Get all characters of the expression in a string
    cleanedExpression = cleanedExpression.map((item) => {
        if (operators.find((operator) => item === operator) != undefined) {
            return ` ${item} `;
        } else {
            return item;
        }
    }); // Put whitespace arround operators
    cleanedExpression = cleanedExpression.join("").split(" ");
    return cleanedExpression; // Join into string and separate the cleaned expression into numbers and operators
};

const calculate = (expression) => {
    let [a, operator, b] = cleanExpression(expression); // Get values and operator
    return operate(operator, parseFloat(a), parseFloat(b)); // Calculate the result
};

const operate = (operator, a, b) => {
    const operations = [
        {
            operator: "+",
            function: add,
        },
        {
            operator: "-",
            function: subtract,
        },
        {
            operator: "x",
            function: multiply,
        },
        {
            operator: "/",
            function: divide,
        },
    ];

    let func = operations.find((item) => item["operator"] === operator);
    return func.function(a, b);
};

createCalculator = () => {
    const buttons = [
        "CE",
        "C",
        "DEL",
        "/",
        "7",
        "8",
        "9",
        "x",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "+/-",
        "0",
        ",",
        "=",
    ];

    const body = document.querySelector("body");

    const container = document.createElement("div");
    container.id = "container";

    const calculator = document.createElement("div");
    calculator.id = "calculator";

    const display = document.createElement("input");
    display.id = "display";
    display.placeholder = "Write expression";
    calculator.appendChild(display);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons";

    // Create and append buttons
    buttons.map((button) => {
        buttonElement = document.createElement("button");
        buttonElement.id = button;
        buttonElement.textContent = button;
        buttonsContainer.appendChild(buttonElement);
    });
    calculator.appendChild(buttonsContainer);

    container.appendChild(calculator);

    body.appendChild(container);
};

createCalculator();

const display = document.querySelector("#display");

document.querySelectorAll("#buttons>button").forEach((element) =>
    element.addEventListener("click", (event) => {
        if (element.id != "=") display.value += event.target.id;
    })
);

document.querySelector("[id='=']").addEventListener("click", (event) => {
    const result = calculate(display.value);
    display.value = result;
});

// Do not edit below this line
exports = {
    add,
    subtract,
    multiply,
    divide,
};
