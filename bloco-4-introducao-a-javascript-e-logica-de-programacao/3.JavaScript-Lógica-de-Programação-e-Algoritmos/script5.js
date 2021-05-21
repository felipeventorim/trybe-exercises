// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 7;
let linha = [];
let insereEspacoDireita = Math.ceil(n/2);
let insereEspacoEsquerda = Math.ceil(n/2);

for (let indexColuna = 1; indexColuna <= Math.ceil(n/2); indexColuna++) {
  for (let indexLinha = 1; indexLinha <= n; indexLinha++) {
    if (indexLinha === insereEspacoEsquerda || indexLinha === insereEspacoDireita || indexColuna === Math.ceil(n/2)) {
      linha += '*';
    } else {
      linha += ' ';
    }
  }
  console.log(linha);

  insereEspacoEsquerda -= 1;
  insereEspacoDireita += 1;
  linha = [];
}
