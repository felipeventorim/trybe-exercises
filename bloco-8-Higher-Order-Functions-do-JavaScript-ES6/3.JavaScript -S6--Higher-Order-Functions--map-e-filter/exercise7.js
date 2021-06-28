const assert = require('assert');
const books = require('./exercise1');

const expectedResult = 'O Senhor dos Anéis';

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName() {
  const author = books.filter((book) => book.author.name.match(/^..\s..\s..\s/));
  return author[0].name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
