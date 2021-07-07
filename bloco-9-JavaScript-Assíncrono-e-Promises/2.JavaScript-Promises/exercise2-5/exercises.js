/*
2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
Primeiramente, instancie uma Promise
Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

4. Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
*/

const randomNumbers = (max) => Math.ceil(Math.random() * max);

const arrayRandomNumbers = (length, max) => {
  const array = [];
  for (let index = 0; index < length; index += 1) {
    array.push(randomNumbers(max));
  }
  return array;
};

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const arrayRandom = arrayRandomNumbers(10, 50);
    const summationNumbersSquared = arrayRandom.reduce((acc, number) => (acc + number ** 2));

    if (summationNumbersSquared < 8000) {
      return resolve(summationNumbersSquared);
    }
    reject();
  });

  promise
  .then((summation) => [2, 3, 5, 10].map((number) => summation / number))
  .then((array) => console.log(array.reduce((acc, number) => acc + number)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();
