const assert = require('assert');
const books = require('./exercise2');

const expectedResult = 43;

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge() {
  return books.reduce((acc, book, index) => {
    if (index === books.length - 1) {
      return (acc + book.releaseYear - book.author.birthYear) / books.length;
    }
    return acc + book.releaseYear - book.author.birthYear;
  }, 0);
}

assert.strictEqual(averageAge(), expectedResult);