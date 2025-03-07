const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b != 0 ? a / b : "ERROR");

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
        operator: "*",
        function: multiply,
    },
    {
        operator: "/",
        function: divide,
    },
];

const operate = (operator, a, b) => {
    let func = operations.find((item) => item["operator"] === operator);
    return func.function(a, b);
};

const changeSign = (number) => number * -1;

export { add, subtract, multiply, divide, operations, operate, changeSign };
