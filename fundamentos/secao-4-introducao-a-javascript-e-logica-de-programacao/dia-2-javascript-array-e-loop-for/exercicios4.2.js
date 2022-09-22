let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
  soma = soma + numbers[index];
}

let media = soma / numbers.length;
console.log('A soma dos números do array é: ' + soma);
console.log('A média aritmética dos números do array é: ' + (media));

if (media > 20) {
  console.log('Valor da média é maior que 20');
}
else {
  console.log('Valor da média é menor ou igual a 20');
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorNumero) {
    maiorNumero = numbers[i];
  }
}
console.log('O maior número do array é: ' + maiorNumero);

let numImpar = 0;
for (let i1 = 0; i1 < numbers.length; i1++) {
  if (numbers[i1] % 2 !== 0) {
    numImpar++;
  }
}

if (numImpar > 0) {
  console.log('Existem ' + numImpar + ' números ímpares no array.');
}
else {
  console.log('Nenhum valor ímpar encontrado');
}

let menorNumero = numbers[0];

// Tentativa errada
// for (let i2 = 0; i2 < numbers.length; i2++) {
//   for (let i3 = i2 + 1; i3 < numbers.length; i3++) {
//     if (numbers[i2] < numbers[i3]) {
//       menorNumero = numbers[i2];
//     }
//   }
// }

for (let i2 = 0; i2 < numbers.length; i2++) {
  if (numbers[i2] < menorNumero) {
    menorNumero = numbers[i2];
  }
}
console.log('O menor número do array é o: ' + menorNumero);

let array25 = [];
for (let i3 = 0; i3 < 25; i3 += 1){
  array25.push(i3+1);
}
console.log(array25);

i4 = 0;
while (i4 < array25.length){
  console.log('A divisão de ' + array25[i4] + ' por 2 é ' + (array25[i4]/2));
  i4 += 1;
}