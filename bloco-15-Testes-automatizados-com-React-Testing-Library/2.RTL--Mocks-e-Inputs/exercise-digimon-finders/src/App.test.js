import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

const DIGIMON = [
  {
    "name": "Agumon",
    "img": "https://digimon.shadowsmith.com/img/agumon.jpg",
    "level": "Rookie"
  }
];

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Verifica se ao clicar no botão digitando \'Agumon\', aparece o Digimon na tela', async () => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve(DIGIMON),
      });
    });
    const { findByText, getByRole } = render(<App />);

    userEvent.type(getByRole('textbox'), 'Agumon');
    userEvent.click(getByRole('button'));

    await findByText(/Rookie/);
  });
});
