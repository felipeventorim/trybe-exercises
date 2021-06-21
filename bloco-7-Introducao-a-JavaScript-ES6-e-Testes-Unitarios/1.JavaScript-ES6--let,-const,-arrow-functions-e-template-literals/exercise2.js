// 1. Crie uma função que receba um número e retorne seu fatorial.

let resposta = 1;
// --- Versão 1
const fatorialV1 = (numero) => {
  while (numero) {
    resposta *= numero;
    numero -= 1;
  }
  return resposta;
};
console.log(fatorialV1(4));

// --- Versão 2
resposta = 1;
const fatorialV2 = (numero) => {
  if (numero) {
    resposta *= numero;
    numero -= 1;
    return fatorialV2(numero);
  }
  return resposta;
};
console.log(fatorialV2(4));

// --- Versão 3
const fatorialV3 = (numero) => (numero === 1) ? 1 : numero * fatorialV3(numero - 1);
console.log(fatorialV3(4));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (frase) => frase.split(' ').sort((a, b) => b.length - a.length);

console.log(`Na frase: 'Antônio foi no banheiro e não sabemos o que aconteceu',
a maior palavra é ${maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu')[0]}.`);

/*
4. Crie um código JavaScript com a seguinte especificação:
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe".
*/

const parametro = 'Felipe';
const trocaX = (frase) => (frase.replace(/x/g, parametro));
trocaX('Tryber x aqui!');
// --
const skills = ['JavaScript', 'CSS', 'HTML', 'Integridade', 'Generosidade'];

const imprimiFrase = (frase) => `${frase} Minhas cinco principais habilidades são:
${skills.sort().join(', ')}.`;

console.log(imprimiFrase(trocaX));
