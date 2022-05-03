const calculator = require("./calculator");

describe('Calculator', () => {
  
  describe('Adding', () => {
    test("should add numbers correcty", () => {
      expect(calculator.add(2, 2)).toEqual(4);
    });
  
    test("should return 'not valid numbers' if inputs are invalid", () => {
      expect(calculator.add(2, "str")).toEqual("not valid numbers");
    });

    test("should throw an error if addend is 0", () => {
      expect(() => calculator.add(20, 0)).toThrow("cannot add 0");
    });
  })
  
  
  describe('Subtracting', () => {
    test("should subtract numbers correcty", () => {
        expect(calculator.subtract(2, 2)).toEqual(0);
    });
  
    test("should return 'not valid numbers' if inputs are invalid", () => {
        expect(calculator.subtract(2, "str")).toEqual("not valid numbers");
    });

    test("should throw an error if subtracting is 0", () => {
      expect(() => calculator.subtract(20, 0)).toThrow("cannot subtract 0");
    });
  })
  
  describe('Multiplyaing', () => {
    test("should multiply numbers correcty", () => {
        expect(calculator.multiply(2, 20)).toEqual(40);
    });
  
    test("should return 'not valid numbers' if inputs are invalid", () => {
        expect(calculator.multiply("20", "str")).toEqual("not valid numbers");
    });

    test("should throw an error if multiplier is 0", () => {
      expect(() => calculator.multiply(20, 0)).toThrow("cannot multiply by 0");
    });
  })
  
  describe('Dividing', () => {
    test("should divide numbers correcty", () => {
        expect(calculator.divide(20, 2)).toEqual(10);
    });
  
    test("should return 'not valid numbers' if inputs are invalid", () => {
        expect(calculator.divide("20", "str")).toEqual("not valid numbers");
    });
  
    test("should throw an error if divisor is 0", () => {
        expect(() => calculator.divide(20, 0)).toThrow("cannot divide by 0");
    });
  })


})
