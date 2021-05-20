// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorDeImpares = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 1) {
    contadorDeImpares += 1;
  }
}

if (contadorDeImpares > 0) {
  console.log('A quantidade de ímpares no array é: ' + contadorDeImpares);
} else {
  console.log('Nenhum valor ímpar encontrado');
}