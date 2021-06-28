const assert = require('assert');
const books = require('./exercise1');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  const classics = books.filter((book) => 2021 - book.releaseYear > 60);
  return classics.map((book) => book.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);
