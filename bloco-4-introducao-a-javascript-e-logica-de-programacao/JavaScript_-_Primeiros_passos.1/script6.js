/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let pecaDeXadrez = 'DaMa';

switch (pecaDeXadrez.toLowerCase()) {
  case 'peao':
    console.log('Anda uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
    break;
  case 'cavalo':
    console.log('Anda em L');
    break;
  case 'bispo':
    console.log('Anda em diagonal');
    break;
  case 'torre':
    console.log('Anda em linha reta');
    break;
  case 'dama':
    console.log('Anda em qualquer direção, quantas casas quiser');
    break;
  case 'rei':
    console.log('Anda em qualquer direção, porém uma casa por vez');
    break;
  default:
    console.log('O nome da peça está incorreto');
}
