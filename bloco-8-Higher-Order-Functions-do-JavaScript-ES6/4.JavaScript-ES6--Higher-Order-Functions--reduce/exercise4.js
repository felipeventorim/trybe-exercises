const assert = require('assert');
const books = require('./exercise2');

const expectedResult = 'As Crônicas de Gelo e Fogo';

// 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
  return books
    .reduce((acc, book) => (book.name.length > acc.length ? book.name : acc), '');
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);