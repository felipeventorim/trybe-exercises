// 6 - Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.
// 6.1 - Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
// 6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas,
// caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});