const lotteryChecker = (number1, number2) => {
  console.log(`Número Apostado: ${number1}
Número Sorteado: ${number2}
`);
  if (number1 === number2) {
    return 'Parabéns você ganhou'
   } else{
    return 'Tente novamente';
   }
}

const lottery = (number, func) => {
  return func(number, (Math.floor(Math.random() * 5)+1));
}

console.log(lottery(3,lotteryChecker));

