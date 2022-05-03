const calculator = (() => {
  function add(a, b) {
    if(parseInt(b) == 0) {
      throw 'cannot add 0';
    }
    if(isNaN(a) || isNaN(b)) {
      return 'not valid numbers';
    }
    return a + b;
  }

  function subtract(a, b) {
    if(parseInt(b) == 0) {
      throw 'cannot subtract 0';
    }
    if(isNaN(a) || isNaN(b)) {
      return 'not valid numbers';
    }
    return a - b;
  }

  function multiply(a, b) {
    if(parseInt(b) == 0) {
      throw 'cannot multiply by 0';
    }
    if(isNaN(a) || isNaN(b)) {
      return 'not valid numbers';
    }
    return a * b;
  }

  function divide(a, b) {
    if(parseInt(b) == 0) {
      throw 'cannot divide by 0';
    }

    if(isNaN(a) || isNaN(b)) {
      return 'not valid numbers';
    }

    return a / b;
  }

  return {
    add,
    subtract,
    multiply,
    divide
  }
})();

module.exports = calculator;