function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

// Parte 1
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let days = document.getElementById('days');

function createDaysOfTheMonth(){
  for (i = 0; i < decemberDaysList.length; i++){
    let itemLista = document.createElement('li');
    itemLista.innerText = decemberDaysList[i];
    itemLista.className = 'day';
    days.appendChild(itemLista);

    if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25){
      itemLista.className += ' friday';
    }

    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31){
      itemLista.className += ' holiday';
    }
  }
}

// Parte 2
let botaoFeriados = document.createElement('button');
let buttonsContainer = document.querySelector('.buttons-container');

function criaBotaoFeriados (string){
  botaoFeriados.id = "btn-holiday";
  buttonsContainer.appendChild(botaoFeriados);
  botaoFeriados.innerText = string;
}

// Parte 3
let feriados = document.getElementsByClassName('holiday');
let ligaDesliga = 0;

function mudaCorFeriados(){
  botaoFeriados.addEventListener('click',function(){
    if (ligaDesliga === 0) {
      for (i = 0; i < feriados.length; i++){
        feriados[i].style.backgroundColor = '#9cff9c';
      }
      ligaDesliga = 1;
    }
    else {
      for (i = 0; i < feriados.length; i++){
        feriados[i].style.backgroundColor = 'rgb(238,238,238)';
      }
      ligaDesliga = 0;
    }
  })
}

function criaBotaoSexta (string){
  let botaoSexta = document.createElement('button');
  botaoSexta.id = 'btn-friday';
  botaoSexta.innerText = string;
  buttonsContainer.appendChild(botaoSexta);
}

createDaysOfTheWeek();
createDaysOfTheMonth();
criaBotaoFeriados('Feriados');
mudaCorFeriados();
criaBotaoSexta('Sexta-feira');

console.log(days.children);
console.log(buttonsContainer.children);
// Escreva seu código abaixo.
