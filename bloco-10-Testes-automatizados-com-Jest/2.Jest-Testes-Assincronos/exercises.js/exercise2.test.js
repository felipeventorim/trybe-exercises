// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para
// o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

const getUserName = require('./exercise2-3');

describe('test getUserName()', () => {
  it('should have find the user Mark', () => {
    expect.assertions(1);
    return getUserName(4).then((userName) => {
      expect(userName).toBe('Mark');
    });
  });

  it('should have find the user Paul', () => {
    expect.assertions(1);
    return getUserName(5).then((userName) => {
      expect(userName).toBe('Paul');
    });
  });
});

describe('test getUserName()', () => {
  it('should not have find the id 3', () => {
    expect.assertions(1);
    return getUserName(3).catch((userName) => {
      expect(userName).toEqual({ error: 'User with 3 not found.' });
    });
  });
});