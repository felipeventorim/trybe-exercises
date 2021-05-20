// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let alfa = 30;
let beta = 60;
let gama = 90;

if (alfa <= 0 | beta <= 0 | gama <= 0) {
  console.log('erro: os angulos devem ter valores positivos');
} else if (alfa + beta + gama === 180) {
  console.log(true);
} else {
  console.log(false);
}
