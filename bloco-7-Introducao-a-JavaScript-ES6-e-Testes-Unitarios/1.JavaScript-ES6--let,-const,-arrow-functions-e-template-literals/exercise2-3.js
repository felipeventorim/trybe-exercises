/*
3. Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
*/

window.onload = () => {
  let clickCount = 0;
  const btn = document.getElementById('btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    clickCount += 1;
    const counter = document.getElementById('counter');
    counter.innerText = `Contador de clicks: ${clickCount}`;
  });
};
