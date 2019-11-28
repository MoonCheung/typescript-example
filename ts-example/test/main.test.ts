const math = require('../src/main');

test('add: 1 + 2 = 3', () => {
  expect(math.adds(1, 2)).toBe(3);
});

test('reduce: 1 - 2 = -1', () => {
  expect(math.reduce(1, 2)).toBe(-1);
});