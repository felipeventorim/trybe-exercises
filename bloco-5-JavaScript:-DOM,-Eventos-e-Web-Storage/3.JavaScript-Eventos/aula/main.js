/* eslint-disable no-param-reassign */
const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function adicionaClasseTech(event) {
  divUm.classList.remove('tech');
  divDois.classList.remove('tech');
  divTres.classList.remove('tech');
  
  event.target.className = 'tech';
}
divUm.addEventListener('click', adicionaClasseTech);
divDois.addEventListener('click', adicionaClasseTech);
divTres.addEventListener('click', adicionaClasseTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function alteraTextoDaTech(event) {
  if (divUm.className === 'tech') {
    divUm.innerText = event.target.value;
  }
  if (divDois.className === 'tech') {
    divDois.innerText = event.target.value;
  }
  if (divTres.className === 'tech') {
    divTres.innerText = event.target.value;
  }
}
function apagarTexto() {
  input.value = '';
}
input.addEventListener('keyup', alteraTextoDaTech);
input.addEventListener('change', apagarTexto);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function abrePagina() {
  window.open('http://www.google.com.br');
}
myWebpage.addEventListener('dblclick', abrePagina);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function mudaCor(event) {
  event.target.style.color = 'rgb(17, 163, 106)';
}
function cor(event) {
  event.target.style.color = 'white';
}
myWebpage.addEventListener('mouseenter', mudaCor);
myWebpage.addEventListener('mouseleave', cor);

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
