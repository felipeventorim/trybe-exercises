const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const FIRST_NAME_1 = 'meuPrimeiroReducer/name';
const LAST_NAME_1 = 'meuPrimeiroReducer/lastName';
const FIRST_NAME_2 = 'meuSegundoReducer/name';
const LAST_NAME_2 = 'meuSegundoReducer/lastName';

const changeFirstname1 = (name) => ({ type: FIRST_NAME_1, payload: name});
const changeLastname1 = (lastName) => ({ type: LAST_NAME_1, payload: lastName});
const changeFirstname2 = (name) => ({ type: FIRST_NAME_2, payload: name});
const changeLastname2 = (lastName) => ({ type: LAST_NAME_2, payload: lastName});

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case FIRST_NAME_1:
      return {
        ...state,
        nome: action.payload,
      };
    case LAST_NAME_1:
      return {
        ...state,
        sobrenome: action.payload,
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case FIRST_NAME_2:
      return {
        ...state,
        nome: action.payload,
      };
    case LAST_NAME_2:
      return {
        ...state,
        sobrenome: action.payload,
      };
    default:
      return state;
  }
};

window.onload = () => {
  const combinedReducers = Redux.combineReducers({
    meuPrimeiroReducer,
    meuSegundoReducer,
  });
  const store = Redux.createStore(combinedReducers);

  setTimeout(() => {
    store.dispatch(changeFirstname1('Lucas'));
    store.dispatch(changeLastname1('Caribé'));
    store.dispatch(changeFirstname2('Gustavo'));
    store.dispatch(changeLastname2('Braga'));
  }, 2000);

  store.subscribe(() => {
    const nome1 = document.querySelector('#nome-1');
    const sobrenome1 = document.querySelector('#sobrenome-1');
    const nome2 = document.querySelector('#nome-2');
    const sobrenome2 = document.querySelector('#sobrenome-2');
    const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

    nome1.innerHTML = meuPrimeiroReducer.nome;
    sobrenome1.innerHTML = meuPrimeiroReducer.sobrenome;
    nome2.innerHTML = meuSegundoReducer.nome;
    sobrenome2.innerHTML = meuSegundoReducer.sobrenome;    
  });
}
