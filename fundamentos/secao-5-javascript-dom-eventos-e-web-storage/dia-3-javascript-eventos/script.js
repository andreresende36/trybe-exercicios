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

function createDaysOfTheMonth() {
  for (i = 0; i < decemberDaysList.length; i++) {
    let itemLista = document.createElement('li');
    itemLista.innerText = decemberDaysList[i];
    itemLista.className = 'day';
    days.appendChild(itemLista);

    if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25) {
      itemLista.className += ' friday';
    }

    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
      itemLista.className += ' holiday';
    }
  }
}

// Parte 2
let botaoFeriados = document.createElement('button');
let buttonsContainer = document.querySelector('.buttons-container');

function criaBotaoFeriados(string) {
  botaoFeriados.id = "btn-holiday";
  buttonsContainer.appendChild(botaoFeriados);
  botaoFeriados.innerText = string;
}

// Parte 3
let feriados = document.getElementsByClassName('holiday');
let ligaDesliga1 = 0;

function mudaCorFeriados() {
  botaoFeriados.addEventListener('click', function () {
    if (ligaDesliga1 === 0) {
      for (i = 0; i < feriados.length; i++) {
        feriados[i].style.backgroundColor = '#9cff9c';
      }
      ligaDesliga1 = 1;
    }
    else {
      for (i = 0; i < feriados.length; i++) {
        feriados[i].style.backgroundColor = 'rgb(238,238,238)';
      }
      ligaDesliga1 = 0;
    }
  })
}

// Parte 4
let botaoSexta = document.createElement('button');

function criaBotaoSexta(string) {
  botaoSexta.id = 'btn-friday';
  botaoSexta.innerText = string;
  buttonsContainer.appendChild(botaoSexta);
}

// Parte 5
let sextas = document.getElementsByClassName('friday');
let ligaDesliga2 = 0;
let salvaSextas = [];

function mudaCorSexta() {
  botaoSexta.addEventListener('click', function () {
    if (ligaDesliga2 === 0) {
      for (i = 0; i < sextas.length; i++) {
        salvaSextas.push(sextas[i].innerText);
        sextas[i].style.backgroundColor = '#F74164';
        sextas[i].innerText = 'SEXTEMOS';
      }
      ligaDesliga2 = 1;
    }
    else {
      for (i = 0; i < sextas.length; i++) {
        sextas[i].style.backgroundColor = 'rgb(238,238,238)';
        sextas[i].innerText = salvaSextas[i];
      }
      ligaDesliga2 = 0;
    }
  })
}

// Parte 6
let day = document.getElementsByClassName('day');

function zoomDay() {
  for (i = 0; i < day.length; i++) {
    day[i].addEventListener('mouseover', function () {
      event.target.style.transform = 'scale(1.5)';
      event.target.style.fontWeight = 'bold';
    });
  }
  for (i = 0; i < day.length; i++) {
    day[i].addEventListener('mouseout', function () {
      event.target.style.transform = 'scale(1)';
      event.target.style.fontWeight = 'normal';
    });
  }
}

// Parte 7
let minhasTarefas = document.querySelector(".my-tasks");

function criaTarefa(string) {
  let tarefa = document.createElement('span');
  tarefa.innerText = string;
  minhasTarefas.appendChild(tarefa);
}

// Parte 8
let legenda = document.createElement('div');
function criaLegenda(cor) {
  legenda.className = 'task';
  legenda.style.backgroundColor = cor;
  minhasTarefas.appendChild(legenda);
}

// Parte 9
let ligaDesligaLegenda = 0;

function selecionaTarefa() {
  legenda.addEventListener('click', function () {
    if (ligaDesligaLegenda === 0) {
      legenda.className += ' selected';
      ligaDesligaLegenda = 1;
      legenda.style.boxShadow = '0px 0px 15px green';
    }
    else {
      legenda.className = 'task';
      ligaDesligaLegenda = 0;
      legenda.style.boxShadow = '0px 0px 0px';
    }
  })
}

// Parte 10
function marcaTarefaCalendario() {  
  for (i = 0; i < day.length; i++) {
    day[i].addEventListener('click', function () {
      const corTarefa = document.querySelector('.selected').style.backgroundColor;
      if (event.target.style.color !== corTarefa) {
        event.target.style.color = corTarefa;
        event.target.style.boxShadow = '0px 0px 3px green';
      }
      else {
        event.target.style.color = "rgb(119,119,119)";
        event.target.style.boxShadow = '0px 0px 0px';
      }
    });
  }
}

// Bônus
function adicionaCompromissos (){
  
}

createDaysOfTheWeek();
createDaysOfTheMonth();
criaBotaoFeriados('Feriados');
mudaCorFeriados();
criaBotaoSexta('Sexta-feira');
mudaCorSexta();
zoomDay();
criaTarefa('Estudar');
criaLegenda('green');
selecionaTarefa();
marcaTarefaCalendario();

console.log(days.children);
console.log(buttonsContainer.children);
console.log(sextas);
console.log(salvaSextas);
console.log(day);
console.log(minhasTarefas.children);

// Escreva seu código abaixo.
