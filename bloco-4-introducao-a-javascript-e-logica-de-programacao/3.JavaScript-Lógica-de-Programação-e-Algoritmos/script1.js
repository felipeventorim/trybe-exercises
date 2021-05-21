// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let linha = [];

for (let indexLinha = 0; indexLinha < n; indexLinha++) {
  linha += '*';
}

for (let indexColuna = 0; indexColuna < n; indexColuna++) {
  console.log(linha);
}
