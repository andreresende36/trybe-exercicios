// Solução 1
const factorial = num => {
  let result = 1;
  for(let i = 2; i <= num; i += 1 ){
    result = result * i;
  }
  return `Esse é o fatorial ${result}`;
}

console.log(factorial(8));

// Solução 2
const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(8));