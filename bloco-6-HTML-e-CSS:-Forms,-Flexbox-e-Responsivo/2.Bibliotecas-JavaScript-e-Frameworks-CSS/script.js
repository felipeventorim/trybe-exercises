const picker = new Pikaday({ field: document.getElementById('datepicker') });

const buttonSubmit = document.getElementById('submit');

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

function montarObjeto() {
  const itens = document.querySelectorAll('.form-control');
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
    // event.preventDefault();
    imprimeObjeto();
  });
}

window.onload = function inicio() {
  listaEstado();
  submit();
};

new window.JustValidate('.your-form', {

});