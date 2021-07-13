// 5. Compare dois objetos para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
describe('Compare two objects', () => {
  it('obj1 and obj2 must be identical', () => {
    expect(obj1).toEqual(obj2);
  });

  it('obj1 and obj3 must not be identical', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
