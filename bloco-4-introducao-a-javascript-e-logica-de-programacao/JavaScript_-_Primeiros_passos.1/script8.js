/*
Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

let num1 = 5;
let num2 = 9;
let num3 = 19;

if (!(num1 % 2) || !(num2 % 2) || !(num3 % 2)) {
  console.log('true');
} else {
  console.log(false);
}
