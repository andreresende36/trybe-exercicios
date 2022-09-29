document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'green';
document.getElementById('primeiroFilhoDoFilho').innerText = 'Esse é o primeiro filho.'
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').children[2]);