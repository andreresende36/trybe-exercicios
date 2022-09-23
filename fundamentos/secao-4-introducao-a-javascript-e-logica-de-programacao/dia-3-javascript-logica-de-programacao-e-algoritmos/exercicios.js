// Exercício 1
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

let fatorial = 1;
let num = 10;

for (index = num; index > 0; index -= 1){
  fatorial = fatorial * index;
}

console.log('O fatorial de ' + num + ' é: ' + fatorial);

// Inverter palavra

let word = 'tryber';
let inverso = [];

for (let letra of word){
  inverso.unshift(letra);
}
console.log(inverso.join(''));

// Contagem em array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let contador = 0;
let maiorContagem = 0;
let maiorPalavra = '';

// Maior palavra
for (index = 0; index < array.length; index += 1){
  for (let letra of array[index]){
    contador += 1;
  }
  if (contador > maiorContagem){
    maiorContagem = contador;
    maiorPalavra = array[index];
  }
  contador = 0;
}
console.log('A maior palavra é ' + maiorPalavra);

// Menor palavra
let contador2 = 0;
let menorContagem = Number.POSITIVE_INFINITY;
let menorPalavra = '';

for (index = 0; index < array.length; index += 1){
  for (let letra of array[index]){
    contador2 += 1;
  }
  if (contador2 < menorContagem){
    menorContagem = contador2;
    menorPalavra = array[index];
  }
  contador2 = 0;
}
console.log('A menor palavra é ' + menorPalavra);