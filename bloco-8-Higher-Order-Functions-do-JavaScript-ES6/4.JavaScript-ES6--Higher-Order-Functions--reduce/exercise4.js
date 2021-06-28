const assert = require('assert');
const books = require('./exercise2');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

// 4 - Encontre o livro com o maior nome.

function longestNamedBook() {
  return books
    .reduce((acc, book) => (book.name.length > acc.name.length ? book : acc));
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);