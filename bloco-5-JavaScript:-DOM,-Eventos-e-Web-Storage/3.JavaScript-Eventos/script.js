function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function AddDays(dezDaysList, index) {
  const li = document.createElement('li');
  li.innerText = dezDaysList[index];
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    li.className = 'day holiday';
  } else if ((dezDaysList[index] - 4) % 7 === 0) {
    li.className = 'day friday';
  } else {
    li.className = 'day';
  }
  return li;
}

function holidayColor() {
  const feriadoColor = 'red';
  const feriado = document.getElementsByClassName('holiday');
  for (let index = 0; index < feriados.length; index += 1) {
    if (feriado[index].style.backgroundColor === feriadoColor) {
      feriado[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      feriado[index].style.backgroundColor = feriadoColor;
    }
  }
}

function holiday() {
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = 'Feriados';
  document.querySelector('.buttons-container').appendChild(button);
  button.addEventListener('click', holidayColor);
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
  26, 27, 28, 29, 30, 31];
const feriados = [24, 25, 31];
const days = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  days.appendChild(AddDays(dezDaysList, index));
}

holiday();