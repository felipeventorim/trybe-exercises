const assert = require('assert');
// Escreva a função sumAllNumbers para passar nos testes já implementados.
const sumAllNumbers = (numbers) => {
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  }
  return sum;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);