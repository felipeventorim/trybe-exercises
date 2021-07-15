// 1. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const exercise4 = require('./exercise4');

describe('For the upperCase function', () => {
  test('For the new implementation should call the function, what is its return and how many times it was called', () => {
    const upperCase = jest.spyOn(exercise4, 'upperCase');

    upperCase.mockImplementation((str) => str.toLowerCase());

    expect(upperCase('HELLO')).toBe('hello');
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
  });

  test('For the original implementation should call the function, what is its return and how many times it was called', () => {
    exercise4.upperCase.mockRestore();
    
    expect(exercise4.upperCase('hello')).toBe('HELLO');
  });
});
