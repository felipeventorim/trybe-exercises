// 6. Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro
// deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a
// requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const fetch = require('node-fetch'); 
const fetchAPI = require('./exercise6');

jest.mock('node-fetch');

describe('For the fetchAPI function', () => {
  it('Should call the function, what is its return and how many times it was called', async () => {
    fetch.mockImplementation(async () => ({
      json: async () => 'request sucess',
    }));

    const result = await fetchAPI();

    expect(result).toBe('request sucess');
  });

  it('Should fail the request', async () => {
    fetch.mockReset();
    fetch.mockImplementation(async () => ({
      json: async () => false,
    }));

    const result = await fetchAPI();
    expect(result).toBe('request failed');
  });
});
