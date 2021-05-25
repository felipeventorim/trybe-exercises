/*
1. Pegue cada um dos exercícios da primeira parte das nossas 
aulas de JavaScript e faça com que todos eles sejam funções de 
um mesmo arquivo. As variáveis que você define no começo de cada 
arquivo devem ser removidas e transformadas em parâmetros das 
funções.
*/

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function soma(a, b) {
  return a+b;
}

function subtrai(a, b) {
  return a-b;
}

function multiplica(a, b) {
  return a*b;
}

function divide(a, b) {
  return a/b;
}

function resto(a, b) {
  return a % b;
}

// TESTE
// let a = 3;
// let b = 5;
// console.log(soma(a, b));
// console.log(subtrai(a, b));
// console.log(multiplica(a, b));
// console.log(divide(a, b));
// console.log(resto(a, b));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function maior(num1, num2) {
  if (num1 > num2) {
    return 'O maior número é: ' + num1;
  } else if (num1 < num2) {
    return 'O maior número é: ' + num2;
  } else {
    return 'Os números são iguais';
  }
}

// TESTE
// let num1 = 10;
// let num2 = 8;
// console.log(maior(num1, num2));

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

function maiorDe3(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return 'O maior número é: ' + num1;
  } else if (num2 > num1 && num2 > num3) {
    return 'O maior número é: ' + num2;
  } else if (num3 > num1 && num3 > num2) {
    return 'O maior número é: ' + num3;
  } else {
    return 'Os números são iguais';
  }
}

// TESTE
// let num1 = 10;
// let num2 = 8;
// let num3 = 12;
// console.log(maiorDe3(num1, num2, num3));

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positivoOuNegativo(num1) {
  if (num1 > 0) {
    return 'positive';
  } else if (num1 < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

// TESTE
// let num1 = 10;
// console.log(positivoOuNegativo(num1));

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function ehTriangulo(alfa, beta, gama) {
  if (alfa <= 0 | beta <= 0 | gama <= 0) {
    return 'erro: os angulos devem ter valores positivos';
  } else if (alfa + beta + gama === 180) {
    return true;
  } else {
    return false;
  }
}

// TESTE
// let alfa = 30;
// let beta = 60;
// let gama = 90;
// console.log(ehTriangulo(alfa, beta, gama));

/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

function xadrez(pecaDeXadrez) {
  switch (pecaDeXadrez.toLowerCase()) {
    case 'peao':
      console.log('Anda uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas');
      break;
    case 'cavalo':
      console.log('Anda em L');
      break;
    case 'bispo':
      console.log('Anda em diagonal');
      break;
    case 'torre':
      console.log('Anda em linha reta');
      break;
    case 'dama':
      console.log('Anda em qualquer direção, quantas casas quiser');
      break;
    case 'rei':
      console.log('Anda em qualquer direção, porém uma casa por vez');
      break;
    default:
      console.log('O nome da peça está incorreto');
  }
}

// TESTE
// let pecaDeXadrez = 'DaMa';
// xadrez(pecaDeXadrez);

/*
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

function notaDeAaF(nota) {
  if (nota > 100 | nota < 0){
    console.log('erro: a nota deve estar entre 0 e 100');
  } else if (nota >= 90) {
    console.log('A');
  } else if (nota >= 80) {
    console.log('B');
  } else if (nota >= 70) {
    console.log('C');
  } else if (nota >= 60) {
    console.log('D');
  } else if (nota >= 50) {
    console.log('E');
  } else if (nota < 50) {
    console.log('F');
  } else {
    console.log("informe um valor válido");
  }
}

//  TESTE
// let nota = 70;
// notaDeAaF(nota);

/*
Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

function temPar(num1, num2, num3) {
  if (!(num1 % 2) || !(num2 % 2) || !(num3 % 2)) {
    console.log('true');
  } else {
    console.log(false);
  }
}

// TESTE
// let num1 = 5;
// let num2 = 9;
// let num3 = 19;
// temPar(num1, num2, num3);

/*
Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

function temImpar(num1, num2, num3) {
  if ((num1 % 2) || (num2 % 2) || (num3 % 2)) {
    console.log('true');
  } else {
    console.log(false);
  }
}

// TESTE
// let num1 = 6;
// let num2 = 8;
// let num3 = 17;
// temImpar(num1, num2, num3);

/*
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

function calculaLucro(custoProduto, valorVenda) {
  if (custoProduto < 0 | valorVenda < 0) {
    console.log('erro: os valores devem ser positivos');
  } else {
    let valorCustoTotal = custoProduto*1.2;
    let lucro = (valorVenda - valorCustoTotal)*1000;
    console.log('O lucro ao vender 1000 unidades será de: ' + lucro);
  }
}

// TESTE
// let custoProduto = 10;
// let valorVenda = 20;
// calculaLucro(custoProduto, valorVenda);

/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
*/

function calculaINSS(salarioBruto) {
  // INSS
  let salarioBase = 0;
  if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - salarioBruto*0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - salarioBruto*0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - salarioBruto*0.11;
  } else if (salarioBruto > 5189.22) {
    salarioBase = salarioBruto - 570.88;
  } else {
    console.log('erro: Valor inválido');
  }
  return salarioBase;
}

function calculaIR(salarioBase) {
  // IR
  let salarioLiquido;
  if (salarioBase > 0 && salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (salarioBase*0.075 - 142.80);
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - (salarioBase*0.15 - 354.80);
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - (salarioBase*0.225 - 636.13);
  } else if (salarioBase > 4664.68) {
    salarioLiquido = salarioBase - (salarioBase*0.275 - 869.36);
  } else {
    salarioLiquido = 'erro';
  }
  return salarioLiquido;
}

// TESTE
// let salarioBruto = 3000;
// console.log('Salário Líquido: ' + calculaIR(calculaINSS(salarioBruto)));
