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

// Retorna menor índice
// function retornaMenorIndex(array) {
//   let menorValor = Number.POSITIVE_INFINITY;
//   let menorIndice = Number.NEGATIVE_INFINITY;
//   for (index = 0; index < array.length; index += 1) {
//     if (array[index] < menorValor){
//       menorValor = array[index];
//       menorIndice = index;
//     }
//   }
//   return menorIndice;
// }
// let numeros = [2, 4, 6, 7, 10, 0, -3];
// console.log(retornaMenorIndex(numeros));

// Maior palavra do array
function retornaMaiorPalavra (array){
  let contador = 0;
  let numLetrasMaiorPalavra = 0;
  let maiorPalavra;
  for (index = 0; index < array.length; index += 1){
    for (let letra of array[index]){
      contador += 1;
    }
    if (contador > numLetrasMaiorPalavra){
      numLetrasMaiorPalavra = contador;
      maiorPalavra = array[index];
    }
    contador = 0;
  }
  return maiorPalavra;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(retornaMaiorPalavra(nomes));