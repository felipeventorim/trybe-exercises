// Parte 2:
const name = 'Felipe';
const birthCity = 'Cariacica';
let birthYear = 1993;

console.log(name);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;

console.log(birthYear);
console.log('\n');

// Parte 3:
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId, typeof isEnrolled, 
  typeof patientInfo, typeof patientEmail);

console.log(typeof patientAge);

let base = 5;
let altura = 8;
let area = base*altura;
let perimetro = base+base+altura+altura;

console.log(area);
console.log(perimetro);
console.log('\n');

// Parte 4:
let nota = 90;

if (nota >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
}
else if (nota < 80 && nota >= 60) {
  console.log('Você está na nossa lista de espera');
}
else if (nota < 60) {
  console.log('Você foi reprovado');
}
console.log('\n');

// Parte 5:
let estado = 'aprovada';

switch (estado) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovada(o)!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovado':
    console.log('Você foi reprovado');
    break;
  default:
    console.log('não se aplica');
}