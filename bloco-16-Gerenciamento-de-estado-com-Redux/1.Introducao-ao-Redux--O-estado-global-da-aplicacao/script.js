function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM = 'RANDOM';

const reducer = (state = ESTADO_INICIAL, action) => {
  const nextIndex = state.colors.length - 1 === state.index ? state.index : state.index + 1;
  const previousIndex = !state.index ? state.index : state.index - 1;

  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: nextIndex,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: previousIndex,
      };
    case RANDOM:
    return {
      ...state,
      index: state.colors.length,
      colors: [...state.colors, criarCor()],
    };
    default:
      return state;
  }
}

window.onload = () => {
  const store = Redux.createStore(reducer);
  const previousButton = document.querySelector('#previous');
  const nextButton = document.querySelector('#next');
  const randomButton = document.querySelector('#random');

  previousButton.addEventListener('click', () => {
    store.dispatch({ type: PREVIOUS_COLOR });
  });
  nextButton.addEventListener('click', () => {
    store.dispatch({ type: NEXT_COLOR });
  });
  randomButton.addEventListener('click', () => {
    store.dispatch({ type: RANDOM });
    console.log(store.getState().colors);
  });

  store.subscribe(() => {
    const { colors, index } = store.getState();
    const value = document.querySelector('#value');
    const container = document.querySelector('#container');

    value.innerHTML = colors[index];
    container.style.backgroundColor = colors[index];
    container.style.color = colors.length - 1 === index ? colors[0] : colors[index + 1];
  })
}
