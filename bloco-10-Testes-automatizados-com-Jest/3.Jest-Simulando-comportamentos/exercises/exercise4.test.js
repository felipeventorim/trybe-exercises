// 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta.
// A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e
// concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve
// retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de
// uma string. A terceira deve receber três strings e concatená-las.

const exercise4 = require('./exercise4');

jest.mock('./exercise4');

describe('For the upperCase function', () => {
  test('For the new implementation should call the function, what is its return and how many times it was called', () => {
    exercise4.upperCase.mockImplementation((str) => str.toLowerCase());

    expect(exercise4.upperCase('HELLO')).toBe('hello');
    expect(exercise4.upperCase).toHaveBeenCalled();
    expect(exercise4.upperCase).toHaveBeenCalledTimes(1);
  });
});

describe('For the firstLetter function', () => {
  test('For the new implementation should call the function, what is its return and how many times it was called', () => {
    exercise4.firstLetter.mockImplementation((str) => str[str.length - 1]);
  
    expect(exercise4.firstLetter('hello')).toBe('o');
    expect(exercise4.firstLetter).toHaveBeenCalled();
    expect(exercise4.firstLetter).toHaveBeenCalledTimes(1);
  });
});

describe('For the stringsConcat function', () => {
  test('For the new implementation should call the function, what is its return and how many times it was called', () => {
    exercise4.stringsConcat.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);
  
    expect(exercise4.stringsConcat('h', 'el', 'lo')).toBe('hello');
    expect(exercise4.stringsConcat).toHaveBeenCalled();
    expect(exercise4.stringsConcat).toHaveBeenCalledTimes(1);
  });
});