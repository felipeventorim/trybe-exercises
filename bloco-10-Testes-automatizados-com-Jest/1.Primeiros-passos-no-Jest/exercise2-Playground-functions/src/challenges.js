// Desafio 1
const compareTrue = (num1, num2) => !!(num1 && num2);

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (array) => array[array.length - 1].concat(', ', array[0]);

// Desafio 5
const footballPoints = (wins, ties) => 3 * wins + 1 * ties;

// Desafio 6
const findBiggestNumber = (arrayOfNumbers) =>
  arrayOfNumbers.reduce((acc, curr) => (acc > curr ? acc : curr));

const highestCount = (arrayOfNumbers) => {
  const biggestNumber = findBiggestNumber(arrayOfNumbers);
  return arrayOfNumbers.reduce((acc, curr) => (curr === biggestNumber ? acc + 1 : acc), 0);
};

// Desafio 7
const catAndMouse = (mouse, cat1, cat2) => {
  if ((cat1 - mouse) ** 2 < (cat2 - mouse) ** 2) return 'cat1';
  if (cat1 - mouse > cat2 - mouse) return 'cat2';
  return 'os gatos trombam e o rato foge';
};

// Desafio 8
const transformNumber = (number) => {
  if (number % 15 === 0) return 'fizzBuzz';
  if (number % 5 === 0) return 'buzz';
  if (number % 3 === 0) return 'fizz';
  return 'bug!';
};

const fizzBuzz = (arrayOfNumbers) => 
  arrayOfNumbers.map((number) => transformNumber(number));

// Desafio 9
const encrypterDecrypter = (mensagem, key) => 
  mensagem.split('').map((letter) => ((key[letter]) ? key[letter] : letter)).join('');

function encode(mensagem) {
  const key = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  
  return encrypterDecrypter(mensagem, key);
}

function decode(mensagem) {
  const key = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return encrypterDecrypter(mensagem, key);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
