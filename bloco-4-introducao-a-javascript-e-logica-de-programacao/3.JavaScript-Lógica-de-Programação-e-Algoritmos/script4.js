// 4- Depois, faça uma pirâmide com n asteriscos de base:

let n = 5;
let linha = [];
let insereEspacoDireita = Math.ceil(n/2);
let insereEspacoEsquerda = Math.ceil(n/2);

for (let indexColuna = 1; indexColuna <= Math.ceil(n/2); indexColuna++) {
  for (let indexLinha = 1; indexLinha <= n; indexLinha++) {
    if (indexLinha < insereEspacoEsquerda || indexLinha > insereEspacoDireita) {
      linha += ' ';
    } else {
      linha += '*';
    }
  }
  console.log(linha);

  insereEspacoEsquerda -= 1;
  insereEspacoDireita += 1;
  linha = [];
}
