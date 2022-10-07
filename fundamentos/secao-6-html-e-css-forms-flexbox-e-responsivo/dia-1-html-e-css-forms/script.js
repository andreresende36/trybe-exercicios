let button = document.getElementById('button');

// function desligaBotao() {
//   button.addEventListener('click', function () {
//     event.preventDefault();
//   })
// }

let secaoBotoes = document.getElementById('botoes');
let reset = document.createElement('input');
reset.type = 'reset';
reset.name = 'reset';
reset.id = 'resetButton';
reset.value = 'Limpar';

secaoBotoes.appendChild(reset);

let agreement = document.getElementById('agreement');
let fullName = JSON.stringify(document.getElementById('fullName').value);
let inputEmail = JSON.stringify(document.getElementById('input-email').value);
let inputDiscurso = JSON.stringify(document.getElementById('input-discurso').value);

button.addEventListener('click', function () {
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;

  if (!agreement.checked) {
    event.preventDefault();
    alert('Você deve concordar com o uso das imagens para continuar!')
  }
  else{
    for (let caracter of fullName) {
      counter1++;
    }
    for (let caracter of inputEmail) {
      counter2++
    }
    for (let caracter of inputDiscurso) {
      counter3++
    }
    event.preventDefault();
    document.getElementById('teste1').innerHTML = fullName;
    document.getElementById('teste2').innerHTML = inputEmail;
    document.getElementById('teste3').innerHTML = inputDiscurso;

    // if (counter1 < 10 || counter1 > 40 || counter2 < 10 || counter2 > 50 || counter3 > 500){
    //   event.preventDefault();
    //   alert('Dados Inválidos');
    // }
  }
})