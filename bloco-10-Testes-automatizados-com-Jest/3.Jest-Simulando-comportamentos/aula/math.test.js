const math = require('./math');

jest.mock('./math');

describe('1. Faça o mock da funcão subtrair e', () => {
  test('teste sua chamada.', () => {
    math.subtrair(2, 1);
    expect(math.subtrair).toHaveBeenCalled();
  });
});

describe('2. Faça o mock da função multiplicar e implemente como retorno padrão o valor \'10\'.', () => {
  test('Teste a chamada e o retorno.', () => {
    math.multiplicar.mockReturnValue(10);
  
    math.multiplicar(2, 1);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar(2, 5)).toBe(10);
  });
});

describe('3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma.', () => {
  test('Teste a chamada, o retorno e os parâmetros passados.', () => {
    math.somar.mockImplementation((a, b) => a + b);
  
    math.somar(2, 1);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar(2, 2)).toBe(4);
    expect(math.somar).toHaveBeenCalledWith(2, 2);
  });
});

describe('4. Faça o mock da função dividir e implemente um retorno padrão com o valor \'15\'. Implemente também os seguintes valores para a primeira e segunda chamadas: \'2\' e \'5\'.', () => {
  test('Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
    math.dividir.mockReturnValue(15);
    math.dividir.mockReturnValueOnce(2);
    math.dividir.mockReturnValueOnce(5);
  
    math.dividir(2, 1);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
  });
});

describe('5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor \'20\'.', () => {
  test('Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
    math.subtrair.mockReset();
    const subtrair = jest
      .spyOn(math, 'subtrair')
      .mockReturnValue(20);

    expect(subtrair).toHaveBeenCalledTimes(0);
    expect(subtrair()).toBe(20);

    math.subtrair.mockRestore();
    math.subtrair.mockReturnValue(2);
    expect(math.subtrair()).toBe(2);
  });
});
