const estado = document.getElementById('input-estado');
for (let index = 0; index < 27; index += 1) {
  const option = document.createElement('option');
  switch (index) {
    case 0:
      option.innerText = 'Acre';
      option.setAttribute('value', 'AC');
      break;
    case 1:
      option.innerText = 'Alagoas';
      option.setAttribute('value', 'AL');
      break;
    case 2:
      option.innerText = 'Amapá';
      option.setAttribute('value', 'AP');
      break;
    case 3:
      option.innerText = 'Amazonas';
      option.setAttribute('value', 'AM');
      break;
    case 4:
      option.innerText = 'Bahia';
      option.setAttribute('value', 'BA');
      break;
    case 5:
      option.innerText = 'Ceará';
      option.setAttribute('value', 'CE');
      break;
    case 6:
      option.innerText = 'Distrito Federal';
      option.setAttribute('value', 'DF');
      break;
    case 7:
      option.innerText = 'Espírito Santo';
      option.setAttribute('value', 'ES');
      break;
    case 8:
      option.innerText = 'Goiás';
      option.setAttribute('value', 'GO');
      break;
    case 9:
      option.innerText = 'Maranhão';
      option.setAttribute('value', 'MA');
      break;
    case 10:
      option.innerText = 'Mato Grosso';
      option.setAttribute('value', 'MT');
      break;
    case 11:
      option.innerText = 'Mato Grosso do Sul';
      option.setAttribute('value', 'MS');
      break;
    case 12:
      option.innerText = 'Minas Gerais';
      option.setAttribute('value', 'MG');
      break;
    case 13:
      option.innerText = 'Pará';
      option.setAttribute('value', 'PA');
      break;
    case 14:
      option.innerText = 'Paraíba';
      option.setAttribute('value', 'PB');
      break;
    case 15:
      option.innerText = 'Paraná';
      option.setAttribute('value', 'PR');
      break;
    case 16:
      option.innerText = 'Pernambuco';
      option.setAttribute('value', 'PE');
      break;
    case 17:
      option.innerText = 'Piauí';
      option.setAttribute('value', 'PI');
      break;
    case 18:
      option.innerText = 'Rio de Janeiro';
      option.setAttribute('value', 'RJ');
      break;
    case 19:
      option.innerText = 'Rio Grande do Norte';
      option.setAttribute('value', 'RN');
      break;
    case 20:
      option.innerText = 'Rio Grande do Sul';
      option.setAttribute('value', 'RS');
      break;
    case 21:
      option.innerText = 'Rondônia';
      option.setAttribute('value', 'RO');
      break;
    case 22:
      option.innerText = 'Roraima';
      option.setAttribute('value', 'RR');
      break;
    case 23:
      option.innerText = 'Santa Catarina';
      option.setAttribute('value', 'SC');
      break;
    case 24:
      option.innerText = 'São Paulo';
      option.setAttribute('value', 'SP');
      break;
    case 25:
      option.innerText = 'Sergipe';
      option.setAttribute('value', 'SE');
      break;
    case 26:
      option.innerText = 'Tocantins';
      option.setAttribute('value', 'TO');
      break;

    default:
      break;
  }
  estado.appendChild(option);
}

const data = document.getElementById('input-data').value;
const dia = parseInt(data[0] + data[1], 10);
const mes = parseInt(data[3] + data[4], 10);
const ano = parseInt(data[6] + data[7] + data[8] + data[9], 10);

if (
  !(
    dia > 0 && dia <= 31
    && mes > 0 && mes <= 12
    && ano > 0
    && data[2] === '/'
    && data[5] === '/'
  )
) {
  window.alert('Data de início inválida');
}
