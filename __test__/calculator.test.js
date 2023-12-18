import Calculator from "../src/calculator.js";

describe('Calculator', () => {
    test('should correctly calculate day of the week for a specific date', () => {
        const calculateDay = new Calculator();
        expect(calculateDay.calculate(2023, 12, 18)).toMatch('Monday');
    })
})