const calculator = require("../static/calculator.js");

describe("add", () => {
    test("adds 0 and 0", () => {
        expect(calculator.add(0, 0)).toBe(0);
    });

    test("adds 2 and 2", () => {
        expect(calculator.add(2, 2)).toBe(4);
    });

    test("adds positive numbers", () => {
        expect(calculator.add(2, 6)).toBe(8);
    });
});

describe("subtract", () => {
    test("subtracts numbers", () => {
        expect(calculator.subtract(10, 4)).toBe(6);
    });

    test("subtracts negative numbers", () => {
        expect(calculator.subtract(-10, -4)).toBe(-6);
    });

    test("subtracts numbers of mixed parity", () => {
        expect(calculator.subtract(-8, 7)).toBe(-15);
    });
});

describe("multiply", () => {
    test("multiply numbers", () => {
        expect(calculator.multiply(20, 5)).toBe(100);
    });

    test("multiply negative numbers", () => {
        expect(calculator.multiply(-10, -4)).toBe(40);
    });

    test("multiply numbers of mixed parity", () => {
        expect(calculator.multiply(-5, 6)).toBe(-30);
    });
});

describe("divide", () => {
    test("divide numbers", () => {
        expect(calculator.divide(1000, 10)).toBe(100);
    });

    test("divide by zero", () => {
        expect(calculator.divide(10, 0)).toBe("ERROR");
    });

    test("divide negative numbers", () => {
        expect(calculator.divide(-60, -4)).toBe(15);
    });

    test("divide numbers of mixed parity", () => {
        expect(calculator.divide(-60, 3)).toBe(-20);
    });
});
