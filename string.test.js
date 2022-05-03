const stringLength = require('./string');

test('Counting characters', () => {
  expect('Hello').toHaveLength(5);
})

test('Return error', () => {
  expect(() => stringLength()).toThrow(Error)
})
