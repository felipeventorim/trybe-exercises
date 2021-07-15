// Desafio 10
const techList = (nameTech, name) =>
  ((!nameTech.length) ? 'Vazio!' : nameTech.sort().map((tech) => ({ tech, name })));

// Desafio 11
function wrongNumber(phoneNumber) {
  const outOfRange = phoneNumber.find((number) => (number < 0 || number > 9));
  
  let sameNumberThreeOrMoreTimes = false;
  phoneNumber.forEach((number) => {
    const times = phoneNumber.filter((element) => element === number);
    if (times.length >= 3) {
      sameNumberThreeOrMoreTimes = true;
    }
  });

  if (outOfRange || sameNumberThreeOrMoreTimes) {
    return true;
  }

  return false;
}

function formatPhoneNumber(phoneNumber) {
  const formattedPhoneNumber = '(**) *****-****'.split('');

  phoneNumber.forEach((number) => {
    formattedPhoneNumber[formattedPhoneNumber.indexOf('*')] = number;
  });

  return formattedPhoneNumber.join('');
}

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';

  if (wrongNumber(phoneNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  
  return formatPhoneNumber(phoneNumber);
}

// Desafio 12
function triangleCheck(...triangle) {
  const sum = triangle.reduce((acc, curr) => acc + curr);

  return !triangle.find((line) => (line > sum - line));
}

// Desafio 13
function hydrate(drinks) {
  const glass = drinks
    .match(/\d/g)
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return glass > 1 ? `${glass} copos de água` : `${glass} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
