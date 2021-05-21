// 3- Agora inverta o lado do triângulo.

let n = 5;
let linha = [];
let insereAsterisco = n;

for (let indexColuna = 1; indexColuna <=n; indexColuna++) {
  for (let indexLinha = 1; indexLinha <= n; indexLinha++) {
    if (indexLinha < insereAsterisco) {
      linha += ' ';
    } else {
      linha += '*';
    }
  }
  console.log(linha);

  insereAsterisco -= 1;
  linha = [];
}
