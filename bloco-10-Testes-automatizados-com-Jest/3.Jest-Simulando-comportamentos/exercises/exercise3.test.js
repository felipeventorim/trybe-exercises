// 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que
// receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua
// implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const randomNumber = require('./exercise1.test');

jest.mock('./exercise1.test');

describe('For the implementation ((a, b, c) => a * b * c)', () => {
  test('Should call the function, what is its return and how many times it was called', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(2, 3, 4)).toBe(24);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('For the implementation ((a) => a * 2)', () => {
  test('Should call the function, what is its return and how many times it was called', () => {
    randomNumber.mockReset();
    randomNumber.mockImplementation((a) => a * 2);
  
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});