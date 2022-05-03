const { exportAllDeclaration } = require('@babel/types');
const capitalize = require('./capitalize');

test ('Capitalize', () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
})

test("should return '' for strings with length 0", () => {
  expect(capitalize("")).toBe("");
});