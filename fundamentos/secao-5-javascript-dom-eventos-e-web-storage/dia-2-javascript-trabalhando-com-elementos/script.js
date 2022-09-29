// document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'green';
// document.getElementById('primeiroFilhoDoFilho').innerText = 'Esse é o primeiro filho.'
// console.log(document.getElementById('pai').firstElementChild);
// console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
// console.log(document.getElementById('pai').children[2]);

let pai = document.querySelector('#pai');
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let irmaoElementoOndeVoceEsta = document.createElement('section');
let filhoElementoOndeVoceEsta = document.createElement('section');
let bisneto = document.createElement('section');

irmaoElementoOndeVoceEsta.id = 'ultimoFilhoMesmo';
filhoElementoOndeVoceEsta.id = 'filhoDeOndeEstou';
bisneto.id = 'bisneto';

pai.appendChild(irmaoElementoOndeVoceEsta);
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
primeiroFilhoDoFilho.appendChild(bisneto);

console.log(pai);
console.log(irmaoElementoOndeVoceEsta);
console.log(pai.children);
console.log(elementoOndeVoceEsta.children);
console.log(primeiroFilhoDoFilho.children);
console.log(bisneto.parentElement.parentElement.nextElementSibling);