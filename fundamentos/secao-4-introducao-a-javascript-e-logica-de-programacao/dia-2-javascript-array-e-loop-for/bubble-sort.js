// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // let numbers = [];

// // for (let i = 0; i < 10; i += 1){
// //   numbers.push(Math.floor(Math.random() * 100) + 1);
// // }

// // Ordem crescente
// for (let index = 1; index < numbers.length; index += 1) {
//   for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//     if (numbers[index2 + 1] < numbers[index2]) {
//       let swap = numbers[index2 + 1];
//       numbers[index2 + 1] = numbers[index2];
//       numbers[index2] = swap;
//     }
//   }
// }
// console.log('A array ordenada em ordem crescente é ' + numbers);

// // Ordem decrescente
// for (let index = 1; index < numbers.length; index += 1) {
//   for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//     if (numbers[index2 + 1] > numbers[index2]) {
//       let swap = numbers[index2 + 1];
//       numbers[index2 + 1] = numbers[index2];
//       numbers[index2] = swap;
//     }
//   }
// }
// console.log('A array ordenada em ordem decrescente é ' + numbers);

// Array multiplicado
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMultiplicada = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] !== undefined && numbers[index + 1] !== undefined) {
    arrayMultiplicada[index] = numbers[index] * numbers[index + 1];
  }
  else {
    arrayMultiplicada[index] = numbers[index] * 2;
  }
}
console.log('A array multiplicada é ' + arrayMultiplicada);