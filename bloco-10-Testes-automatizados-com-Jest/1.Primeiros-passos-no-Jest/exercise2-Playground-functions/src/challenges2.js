// Desafio 10
const techList = (nameTech, name) =>
  ((!nameTech.length) ? 'Vazio!' : nameTech.sort().map((tech) => ({ tech, name })));

// Desafio 11
function mesmoNumeroMaisDe3Vezes(numeroTelefone, index) {
  let quantidade = 0;
  for (let index2 = 0; index2 < numeroTelefone.length; index2 += 1) {
    if (numeroTelefone[index] === numeroTelefone[index2]) {
      quantidade += 1;
    }
  }
  if (quantidade >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'ok';
}

function numeroExtrapolaLimite0a9(numeroTelefone) {
  for (let index = 0; index < numeroTelefone.length; index += 1) {
    if (numeroTelefone[index] < 0 || numeroTelefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return 'ok';
}

function numeroErrado(numeroTelefone) {
  let messageError = 'ok';
  for (let index = 0; index < numeroTelefone.length; index += 1) {
    if (messageError !== 'ok') {
      return messageError;
    }
    messageError = mesmoNumeroMaisDe3Vezes(numeroTelefone, index);
  }
  messageError = numeroExtrapolaLimite0a9(numeroTelefone);
  return messageError;
}

function criaTelefone(numeroTelefone) {
  const telefone = '(**) *****-****'.split('');
  let numero = 0;
  for (let index = 0; index < telefone.length; index += 1) {
    if (telefone[index] === '*') {
      telefone[index] = numeroTelefone[numero];
      numero += 1;
    }
  }
  return telefone.join('');
}

function generatePhoneNumber(numeroTelefone) {
  let telefone;
  let messageError = 'ok';

  if (numeroTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  messageError = numeroErrado(numeroTelefone);
  telefone = criaTelefone(numeroTelefone);

  if (messageError !== 'ok') {
    return messageError;
  }
  return telefone;
}

// Desafio 12
function linhaMaior(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
}
function linhaMenor(lineA, lineB, lineC) {
  const checkA = lineA < Math.abs(lineB - lineC);
  const checkB = lineB < Math.abs(lineA - lineC);
  const checkC = lineC < Math.abs(lineA - lineB);
  if (checkA || checkB || checkC) {
    return false;
  }
  return true;
}
function triangleCheck(lineA, lineB, lineC) {
  let check = true;

  check = linhaMaior(lineA, lineB, lineC);
  if (!check) {
    return check;
  }

  check = linhaMenor(lineA, lineB, lineC);
  return check;
}

// Desafio 13
function hydrate(bebidas) {
  let agua = 0;
  const message = '';
  const quantidade = bebidas.match(/\d/g);
  for (let index = 0; index < quantidade.length; index += 1) {
    agua += parseInt(quantidade[index], 10);
  }
  if (agua === 1) {
    return message.concat(agua, ' copo de água');
  }
  if (agua > 1) {
    return message.concat(agua, ' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
