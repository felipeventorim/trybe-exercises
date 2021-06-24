/*
3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem
verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida
pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
- Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rightTest, studentTest) => {
  if (studentTest === rightTest) {
    return 1;
  }
  if (studentTest === 'N.A') {
    return 0;
  }
  return - 0.5;
};

const checkTest = (rightTest, studentTest, callback) => {
  let sum = 0;
  for (let index = 0; index < rightTest.length; index += 1) {
    sum += callback(rightTest[index], studentTest[index]);
  }
  return `Nota ${sum} de ${rightTest.length}.`;
};

console.log(checkTest(rightAnswers, studentAnswers, compare));
