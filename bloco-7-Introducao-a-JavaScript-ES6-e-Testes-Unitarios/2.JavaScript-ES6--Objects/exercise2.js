const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/*
1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3. Crie uma função para mostrar o tamanho de um objeto.
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
*/

// 1
const addEntries = (object, key, value) => object[key] = value;
addEntries(lesson2, 'turno', 'manhã');

// 2
const listKeys = (object) => Object.keys(object);
console.log(listKeys(lesson2));

// 3
const lengthObject = (object) => Object.keys(object).length;
console.log(lengthObject(lesson2));

// 4
const listValues = (object) => Object.values(object);
console.log(listValues(lesson2));

// 5
// const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
const allLessons = { lesson1, lesson2, lesson3 };
console.log(allLessons);

// 6
const sumStudents = (lessons) => {
  let summation = 0;
  for (const key in lessons) {
    if (Object.hasOwnProperty.call(lessons, key)) {
      const element = lessons[key];
      summation += element.numeroEstudantes;
    }
  }
  return summation;
};
console.log(sumStudents(allLessons));

// 7
const getValueByNumber = (lesson, keyPosition) => Object.values(lesson)[keyPosition];
console.log(getValueByNumber(lesson1, 0));

// 8
const verifyPair = (lesson, key, value) => (lesson[key] === value);
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// ---------
/* Bônus
1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
*/

// 1
const countHowManyStudentsAttendedClasses = (lessons, matter) => {
  let sum = 0;
  for (const key in lessons) {
    if (Object.hasOwnProperty.call(lessons, key)) {
      const element = lessons[key];
      if (element.materia === matter) {
        sum += element.numeroEstudantes;
      }
    }
  }
  return sum;
};
console.log(countHowManyStudentsAttendedClasses(allLessons, 'Matemática'));

// 2
const getInfo = (lessons, teacher) => {
  let sum = 0;
  const matters = [];
  for (const key in lessons) {
    if (Object.hasOwnProperty.call(lessons, key)) {
      const element = lessons[key];
      if (element.professor === teacher) {
        sum += element.numeroEstudantes;
        matters.push(element.materia);
      }
    }
  }
  return { aulas: matters, estudantes: sum };
};
const createReport = (lessons, teacher) => {
  const report = {
    professor: teacher,
  };
  Object.assign(report, getInfo(lessons, teacher));
  return report;
};
console.log(createReport(allLessons, 'Maria Clara'));
