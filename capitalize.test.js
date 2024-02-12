const capitalize = require('./capitalize.js');

test('takes a string and returns it with the first character capitalized', () => {
  expect(capitalize(`ahoj`)).toBe(`Ahoj`);
  expect(capitalize(`test`)).toBe(`Test`);
});