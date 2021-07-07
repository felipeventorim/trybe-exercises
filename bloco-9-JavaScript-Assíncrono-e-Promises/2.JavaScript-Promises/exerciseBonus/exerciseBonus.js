// Refatore a Promise para utilizar somente async e await .

const randomNumbers = (max) => Math.ceil(Math.random() * max);

const arrayRandomNumbers = (length, max) => {
  const array = [];
  for (let index = 0; index < length; index += 1) {
    array.push(randomNumbers(max));
  }
  return array;
};

const sumNumbersSquared = () => {
    const arrayRandom = arrayRandomNumbers(10, 50);
    const summationNumbersSquared = arrayRandom.reduce((acc, number) => (acc + number ** 2));

    if (summationNumbersSquared >= 8000) {
      throw new Error();
    }
    return summationNumbersSquared;
};

const fetchPromise = async () => {
  try {
    const summation = await sumNumbersSquared();
    const array = await [2, 3, 5, 10].map((number) => summation / number);
    console.log(array.reduce((acc, number) => acc + number));
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
