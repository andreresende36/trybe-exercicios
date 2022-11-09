import validator from 'validator';
import './style.css';

const inputString = document.querySelector('input');
const button = document.querySelector('button');
const select = document.querySelector('select');
const display = document.querySelector('h2');
const { isLowercase, isUppercase, isNumeric, isURL, isHexColor } = validator;

function printer(bool) {
  if (bool) {
    display.innerHTML = 'O texto é válido!';
  } else {
    display.innerHTML = 'O texto NÃO é válido!';
  }
}

function callback(event) {
  event.preventDefault();
  const validationType = select.options[select.selectedIndex].value;
  // console.log(validationType);
  // console.log(inputString.value);
  switch (validationType) {
  case 'isLowercase':
    printer(isLowercase(inputString.value));
    break;
  case 'isUppercase':
    printer(isUppercase(inputString.value));
    break;
  case 'isNumeric':
    printer(isNumeric(inputString.value));
    break;
  case 'isURL':
    printer(isURL(inputString.value));
    break;
  case 'isHexColor':
    printer(isHexColor(inputString.value));
    break;
  default:
    break;
  }
}

button.addEventListener('click', callback);
