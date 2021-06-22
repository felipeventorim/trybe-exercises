const assert = require('assert');
// Escreva a função wordLengths para passar nos testes já implementados.
const wordLengths = (words) => {
  const lengths = [];
  words.forEach((element) => {
    lengths.push(element.length);
  });
  return lengths;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);