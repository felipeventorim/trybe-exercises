const buttonSubmit = document.getElementById('submit');
let validador = true;
function listaEstado() {
  const estado = document.getElementById('input-estado');
  const estadoSigla = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF',
  'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI',
  'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
  for (let index = 0; index < 27; index += 1) {
    const option = document.createElement('option');
    option.innerText = estadoSigla[index];
    option.value = estadoSigla[index];
    estado.appendChild(option);
  }
}

function validacoes() {
  const itens = document.querySelectorAll('.item-form');
  for (let index = 0; index < itens.length; index += 1) {
    if (!itens[index].value) {
      window.alert('Preencha o campo '.concat(itens[index].name));
      validador = false;
      return;
    }
  }
}

function testa(dia, mes) {
  if (mes <= 0 || mes > 12) {
    window.alert('Data de início com mês inválido');
    validador = false;
  }
  if (dia <= 0 || dia > 31) {
    window.alert('Data de início com dia inválido');
    validador = false;
  }
}

function verificaData() {
  const data = document.getElementById('input-data').value;
  const regex = /\d\d\u002F\d\d\u002F\d\d\d\d/;
  if (data.match(regex) !== null) {
    const dia = data.split('/')[0];
    const mes = data.split('/')[1];
    const ano = data.split('/')[2];
    if (ano < 1) {
      window.alert('Data de início com ano inválido');
      validador = false;
    }
    testa(dia, mes);
  } else {
    window.alert('Data de início com formato inválido');
    validador = false;
  }
}

function montarObjeto() {
  const itens = document.querySelectorAll('.item-form');
  const obj = {};
  for (let index = 0; index < itens.length; index += 1) {
    if (!(itens[index].name === 'tipo' && !itens[index].checked)) {
      obj[itens[index].name] = itens[index].value;
    }
  }
  return obj;
}

function imprimeObjeto() {
  const objeto = montarObjeto();
  const curriculo = document.getElementById('curriculo-criado');
  let mensagem = '';
  for (const key in objeto) {
    if (Object.prototype.hasOwnProperty.call(objeto, key)) {
      mensagem += `${key}: ${objeto[key]}\n`;
    }
  }
  curriculo.innerText = mensagem;
}

function submit() {
    buttonSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      validacoes();
      verificaData();
      console.log(validador);
      if (validador) {
        imprimeObjeto();
      }
      validador = true;
    });
}

window.onload = function inicio() {
  listaEstado();
  submit();
};
