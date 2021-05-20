
// .pop()     remove a última tarefa
// .shift()   remove o primeiro item da lista
// .indexOf() procurar o índice de um item no Array

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

/*Exercício 1
Obtenha o valor "Serviços" do array menu :
*/

let menuServices = menu[menu.indexOf('Serviços')];

console.log(menuServices);

/*Exercício 2
Procure o índice do valor "Portfólio" do array menu :
*/

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

/*Exercício 3
Adicione o valor "Contato" no final do array menu :
*/

menu.push('Contato');

console.log(menu);