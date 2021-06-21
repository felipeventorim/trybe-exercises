const addEntries = (object, key, value) => object[key] = value;

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const newKey = 'lastName';
const lastName = 'Ferreira';
addEntries(customer, newKey, lastName);
