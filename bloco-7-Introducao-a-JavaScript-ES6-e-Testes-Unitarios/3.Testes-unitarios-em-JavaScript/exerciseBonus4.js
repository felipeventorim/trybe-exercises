// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está 
// retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
/*
const getLargestNumber = (array) => {
    let largestNumber;
    for (let index = 0; index < array.length - 1; index += 1) {
        if (array[index] > array[index + 1]) {
            largestNumber = [array[index]];
        }
    }
    return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
*/

const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
      if (largestNumber < array[index]) {
          largestNumber = array[index];
      }
  }
  return largestNumber;
};

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(typeof getLargestNumber(parameter), 'number');
assert.deepStrictEqual(getLargestNumber([-45, -8, -2, -50]), -2);

assert.deepStrictEqual(getLargestNumber(parameter), result);
