// 5 - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, 
// e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

/*
1 - beforeEach -> antes de todos os testes
1 - test -> primeiro teste
1 - afterEach -> depois de todos os testes

1 - beforeEach
2 - beforeEach -> antes de todos os testes desse describe
2 - test -> segundo teste
2 - afterEach -> depois de todos os testes desse describe
1 - afterEach
*/