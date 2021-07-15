// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
describe('function sum(a, b)', () => {
  it('should return the sum(4, 5) is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should return the sum(0, 0) is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('function sum(a, b) cases failure', () => {
  it('If throws an error when the parameters are 4 and "5"', () => {
    expect(() => { sum(4, '5'); }).toThrow();
  });

  it('If the error message is "parameters must be numbers" when calling sum(4, "5")', () => {
    expect(() => { sum(4, '5'); }).toThrow('parameters must be numbers');
  });
});
