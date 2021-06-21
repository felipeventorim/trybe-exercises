const assert = require('assert');

const removeMiddle = (words) => {
  const middle = (words.length - 1) / 2;
  const middleWord = [];
  middleWord.push(words[middle]);
  words.splice(middle, 1);
  return middleWord;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);