// 1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function numeroRomano(string) {
  let comparador = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
  };
  let stringMinuscula = string.toLowerCase();
  let numArabico = 0;

  for (let index = 0; index < stringMinuscula.length - 1; index++) {
    if (comparador[stringMinuscula[index]] < comparador[stringMinuscula[index + 1]]) {
      numArabico -= comparador[stringMinuscula[index]];
    } else {
      numArabico += comparador[stringMinuscula[index]];
    }
  }
  numArabico += comparador[stringMinuscula[stringMinuscula.length - 1]];
  return numArabico;
}

// 2. Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) {
  arrayPar = [];
  for (let index = 0; index < vector.length; index++) {
    for (let index2 = 0; index2 < vector[index].length; index2++) {
      if (vector[index][index2] % 2 === 0) {
        arrayPar.push(vector[index][index2]);
      }
    }
  }
  return arrayPar;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// 3. A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

function contaFrutasNaCesta(array) {
  let quantidadeNaCesta = {};
  for (const key in array) {
    quantidadeNaCesta[array[key]] = 0;
  }

  for (let index = 0; index < array.length; index++) {
    quantidadeNaCesta[array[index]] += 1;
  }

  return quantidadeNaCesta;
}

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let cesta = contaFrutasNaCesta(basket);

let mensagem = 'Sua cesta possui: ';
for (const key in cesta) {
  if (cesta[key] > 1) {
    mensagem += cesta[key] + ' ' + key + 's, ';
  } else {
    mensagem += cesta[key] + ' ' + key + ', ';
  }
}
mensagem = mensagem.slice(0, -2);
mensagem += mensagem + '.';

console.log(mensagem);