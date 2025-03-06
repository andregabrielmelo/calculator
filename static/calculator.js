const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b != 0 ? a / b : "ERROR");

const cleanExpression = (expression) => {
    operators = ["+", "-", "x", "/"];

    let cleanedExpression = expression.replaceAll(" ", ""); // remove all white space
    cleanedExpression = cleanedExpression.split(""); // Get all characters of the expression in a string
    cleanedExpression = cleanedExpression.map((item) =>
        item in operators ? item : ` ${item} `
    ); // Put whitespace arround operators
    cleanedExpression = cleanedExpression.join(""); // Join array into string
    return cleanedExpression.split(" "); // Separate the cleaned expression into numbers and operators
};

const calculate = () => {
    const expression = document.querySelector("input#expression").value; // Get math expression in input
    let [a, operator, b] = expression.replace(" ", ""); // Get values and operator
    const result = operate(operator, parseFloat(a), parseFloat(b)); // Calculate the result

    // console.log(`A: ${a}, B: ${b}, Operator: ${operator}`);
    console.log("Split expression: " + cleanExpression(expression));

    // Show result
    document.querySelector(
        "p#result"
    ).textContent = `${a} ${operator} ${b} = ${result}`;
};

const operate = (operator, a, b) => {
    // Store the relation between the operators and functions
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

    // Get function related to that operator
    const currentOperation = operations.reduce((operation, item) =>
        item["operator"] === operator
            ? (operation = item["function"])
            : (operation = operation)
    );
    return currentOperation.function(a, b); // Get the result from the function
};

// Do not edit below this line
exports = {
    add,
    subtract,
    multiply,
    divide,
};
