const reverseString = require('./reverse');

test('should reverse strings', () => {
  expect(reverseString('reverse')).toBe('esrever');
});