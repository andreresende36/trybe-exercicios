// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no final
// tasksList.unshift('Pagar contas do dia'); // adiciona mais uma tarefa no início
// console.log(tasksList);

// tasksList.pop(); // Remove o último item do array
// tasksList.shift(); // Remove o primeiro item do array
// console.log(tasksList);

// let indexOfTask = tasksList.indexOf("Brincar com o cachorro");
// console.log(indexOfTask);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let indexOfPortfolio = menu.indexOf('Portfólio') ;

// console.log(indexOfPortfolio);

// menu.push('Contato');
// console.log(menu);

// let sabores = ['Calabresa','Frango','Mussarela','Portuguesa','Pepperoni'];

// for (let melhorSabor of sabores){
//   console.log('O meelhor sabor de pizza é: ' + melhorSabor);
// }

// let conta = [9,13,26,6,32,46];

// for (let imprime of conta){
//   imprime = imprime / 3;
//   console.log(imprime);
// }

let index = 1;
let limite = 100;
let multiploDe = 10;

console.log('Esses são os múltiplos de ' + multiploDe + ', de 0 a ' + limite);
while (index <= limite) {
  if (index % multiploDe === 0) {
    console.log(index);
  }
  index++;
}