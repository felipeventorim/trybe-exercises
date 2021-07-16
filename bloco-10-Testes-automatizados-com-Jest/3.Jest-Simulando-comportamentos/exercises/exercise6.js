const fetch = require('node-fetch');

const URL = 'https://dog.ceo/api/breeds/image/random';

const fetchAPI = async () => {
  const response = await fetch(URL);
  const obj = await response.json();
  if (obj) {
    return obj;
  }
  return 'request failed';
};

module.exports = fetchAPI;