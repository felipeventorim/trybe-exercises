const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// 1 - Dada uma matriz, transforme em um array.

function flatten() {
  const transform = (acc, array) => {
    array.forEach((element) => {
      acc.push(element);
    });
    return acc;
  };
  return arrays.reduce(transform);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);