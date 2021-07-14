// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para
// o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .

const users = {
  : { name: 'Mark' },
  : { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };
  