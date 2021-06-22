// Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita
// moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina
// possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma
// lista com as moedas que ela devolverá para a pessoa.

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  if (paid < payable) {
    throw new Error('paid value is not enough');
  }
  if (paid === payable) {
    return change;
  }
  
  for (let index = 0; index < length; index += 1) {
    while (remaining - coins[index] >= 0) {
      change.push(coins[index]);
      remaining -= coins[index];
    }
  }

  return change;
}

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);