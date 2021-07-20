// 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa
// implementação deve ocorrer uma única vez. Faça os testes necessários.

const randomNumber = require('./exercise1.test');

jest.mock('./exercise1.test');

test('should call the function, what is its return and how many times it was called', () => {
  randomNumber.mockImplementationOnce((a, b) => a / b);

  expect(randomNumber(4, 2)).toBe(2);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(4, 2);
});