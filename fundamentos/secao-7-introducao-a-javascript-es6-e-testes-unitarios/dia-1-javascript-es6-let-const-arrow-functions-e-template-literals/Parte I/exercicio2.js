const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Solução 1
// const sortOddsAndEvens = (array) => {
// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }
//   return array;
// };

// console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Solução 2
// const sortOddsAndEvens = array => array.sort((a, b) => a - b);
// console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Solução 3
console.log(`Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente!`);