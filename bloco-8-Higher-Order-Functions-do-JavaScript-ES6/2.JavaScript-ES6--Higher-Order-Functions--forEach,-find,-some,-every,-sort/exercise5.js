const assert = require('assert');
const books = require('./exercise1');

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);