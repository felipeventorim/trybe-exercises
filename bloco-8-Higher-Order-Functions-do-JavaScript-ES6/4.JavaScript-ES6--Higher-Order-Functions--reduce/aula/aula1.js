// faça uma função que some todos os números pares do array:
// uma usando reduce e filter , e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair1 = numbers.filter((number) => number % 2 === 0).reduce((sum, number) => sum + number);

const sumPair2 = numbers.reduce((sum, number) => (number % 2 === 0 ? sum + number : sum));

console.log(sumPair1);
console.log(sumPair2);