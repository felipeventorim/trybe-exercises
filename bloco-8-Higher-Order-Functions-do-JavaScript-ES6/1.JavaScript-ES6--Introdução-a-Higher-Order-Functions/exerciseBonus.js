/*
Parte I - Game Actions Simulator
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status,
e ao final, retornam os resultados da rodada.
*/

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/*
1 - Crie uma função que retorna o dano do dragão.
- O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

2 - Crie uma função que retorna o dano causado pelo warrior .
- O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
- O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
- A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
*/

const dragonDamage = (strength) => {
  let damage = Math.floor(Math.random() * strength) + 1;
  if (damage < 15) {
    damage = 15;
  }
  return damage;
};

const warriorDamage = (strength, weaponDmg) => {
  let damage = Math.floor(Math.random() * (strength * weaponDmg)) + 1;
  if (damage < strength) {
    damage = strength;
  }
  return damage;
};

const mageDamage = (intelligence, mana) => {
  const damage = Math.floor(Math.random() * intelligence) + intelligence + 1;
  let manaConsume;
  if (mana < 15) {
    manaConsume = 'Não possui mana suficiente';
  } else {
    manaConsume = mana - 15;
  }
  return {
    damage,
    manaConsume,
  };
};

const gameActions = {
  warrior: () => {
    const damage = warriorDamage(warrior.strength, warrior.weaponDmg);
    dragon.healthPoints -= damage;
    warrior.damage = damage;
  },
  mage: () => {
    const attributes = mageDamage(mage.intelligence, mage.mana);
    dragon.healthPoints -= attributes.damage;
    mage.damage = attributes.damage;
    mage.mana = attributes.manaConsume;
  },
  dragon: () => {
    const damage = dragonDamage(dragon.strength);
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
  },
  status: () => console.table(battleMembers),
};
