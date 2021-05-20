// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array1a25 = [];

for (let index = 0; index < 25; index++) {
  array1a25.push(index + 1);
}

for (let index = 0; index < array1a25.length; index++) {
  console.log(array1a25[index] / 2);
}
