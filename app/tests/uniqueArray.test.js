const { getArray } = require('./path-to-your-function');

describe('getArray function', () => {
  test('should only contain unique items', () => {
    const array = getArray();
    const set = new Set(array);
    expect(set.size).toBe(array.length);
  });
});