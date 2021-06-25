const assert = require('assert');
const books = require('./exercise1');

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique() {
  let differentBirthYear = true;
  books.forEach((book) => {
    books.forEach((book2) => {
      if (book2.author.birthYear === book.author.birthYear 
        && book2.author.name !== book.author.name) {
          differentBirthYear = false;
      }
    });
  });
  return differentBirthYear;
}

assert.strictEqual(authorUnique(), expectedResult);
