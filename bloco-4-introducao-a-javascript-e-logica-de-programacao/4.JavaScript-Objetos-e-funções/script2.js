// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(palavra) {
  let verifica = true;
  for (let index = 0; index < palavra.length/2; index++) {
    if (palavra[index] != palavra[palavra.length - index -1]) {
      verifica = false;
    }
  }
  return verifica;
}

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function retornaIndiceDoMaiorValor(array) {
  let maiorValor = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[maiorValor] < array[index]) {
      maiorValor = index;
    }
  }
  return maiorValor;
}

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function retornaIndiceDoMenorValor(array) {
  let menorValor = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[menorValor] > array[index]) {
      menorValor = index;
    }
  }
  return menorValor;
}

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function retornaMaiorNome(array) {
  let maiorNome = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[maiorNome].length < array[index].length) {
      maiorNome = index;
    }
  }
  return array[maiorNome];
}

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function retornaInteiroQueMaisSeRepete(array) {
  let contador = [];
  for (let index = 0; index < array.length; index++) {
    contador.push(0);
    for (let cont = 0; cont < array.length; cont++) {
      if (array[index] === array[cont]) {
        contador[index] += 1;
      }
    }
  }
  let posicaoMaiorValor = retornaIndiceDoMaiorValor(contador);
  return array[posicaoMaiorValor];
}

// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaNumerosDe1Ate(n) {
  let somatorio = 0;
  for (let index = 1; index <= n; index++) {
    somatorio += index;
  }
  return somatorio;
}

// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, ending) {
  let comparador = true;
  for (let index = 1; index <= ending.length; index++) {
    if (word[word.length - index] != ending[ending.length - index]) {
      comparador = false;
    }
  }
  return comparador;
}
