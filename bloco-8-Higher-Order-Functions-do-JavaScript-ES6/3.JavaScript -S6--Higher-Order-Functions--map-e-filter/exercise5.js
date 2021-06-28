const assert = require('assert');
const books = require('./exercise1');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  const objectAuthors = books.filter((book) => 
    book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  const authors = objectAuthors.map((book) => book.author.name);
  return authors.sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
