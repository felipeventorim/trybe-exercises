// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

const getUserName = require('./exercise2-3');

describe('test getUserName with async/await', () => {
  it('should have find the user Mark', async () => {
    const result = await getUserName(4);
    expect(result).toBe('Mark');
  });

  it('should not have find the id 3', async () => {
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});