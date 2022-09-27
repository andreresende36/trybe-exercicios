// Verifica Palíndromo
// function verificaPalindrome (word){
//   let inverso = [];
//   for (let letra of word){
//     inverso.unshift(letra);
//   }
//   if (inverso.join('') === word){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));
// console.log(verificaPalindrome('ana'));
// console.log(verificaPalindrome('banana'));

// Retorna maior índice
// function retornaMaiorIndex(array) {
//   let maiorValor = Number.NEGATIVE_INFINITY;
//   let maiorIndice = Number.NEGATIVE_INFINITY;
//   for (index = 0; index < array.length; index += 1) {
//     if (array[index] > maiorValor){
//       maiorValor = array[index];
//       maiorIndice = index;
//     }
//   }
//   return maiorIndice;
// }
// let numeros = [2, 3, 6, 7, 10, 1];
// console.log(retornaMaiorIndex(numeros));