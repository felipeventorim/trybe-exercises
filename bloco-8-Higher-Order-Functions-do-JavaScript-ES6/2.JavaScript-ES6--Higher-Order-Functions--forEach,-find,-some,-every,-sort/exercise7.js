const assert = require('assert');
const books = require('./exercise1');

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique() {
  return books.every((book) => 
    books.some((book2) => 
      (book2.author.birthYear === book.author.birthYear 
        && book2.author.name !== book.author.name)));
}

assert.strictEqual(authorUnique(), expectedResult);
