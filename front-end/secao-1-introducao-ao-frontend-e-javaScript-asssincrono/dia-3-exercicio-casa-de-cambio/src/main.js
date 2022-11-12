import './style.css';
import Swal from 'sweetalert2';
import imgUrl from '../img/coin-stack.png';

const searchButton = document.getElementById('search-button');
const coinInput = document.getElementById('coin-input');
const coinDisplay = document.getElementById('coin-display');
const coinsList = document.getElementById('coins-list');

const fetchAPI = (coin) => fetch(`https://api.exchangerate.host/latest?base=${coin}&places=2`)
  .then((response) => response.json())
  .then((data) => {
    if (!coin) {
      throw new Error('Você precisa passar uma moeda');
    }
    if (coin !== data.base) {
      throw new Error('Moeda não existente!');
    }
    coinDisplay.innerHTML = `Valores referentes a 1 ${coin}`;
    return Object.entries(data.rates);
  }).catch((error) => Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error.message,
    background: '#19191A',
    color: '#E0E0E0',
  }));

const fillCoinsList = () => {
  const coin = coinInput.value.toUpperCase();
  let arrayRates = [];
  coinsList.innerHTML = '';
  fetchAPI(coin).then((data) => {
    arrayRates = data;
    arrayRates.forEach((element) => {
      const [key, value] = element;
      const coinBox = document.createElement('div');
      const container = document.createElement('div');
      const coinImage = document.createElement('img');
      const coinName = document.createElement('span');
      const coinRate = document.createElement('span');

      coinBox.className = 'coin-box';
      coinImage.src = imgUrl;
      coinImage.id = 'coin-image';
      coinName.innerHTML = key;
      coinName.id = 'coin-name';
      coinRate.innerHTML = value;
      coinRate.className = 'coin-rate';
      container.append(coinImage, coinName);
      coinBox.append(container, coinRate);
      coinsList.appendChild(coinBox);
    });
  });
};
searchButton.addEventListener('click', fillCoinsList);
