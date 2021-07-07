// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = ({ joke }) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerText = joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((object) => append(object));
};

window.onload = () => fetchJoke();