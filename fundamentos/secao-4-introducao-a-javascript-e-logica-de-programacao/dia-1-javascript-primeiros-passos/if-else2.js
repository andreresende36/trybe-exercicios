// // Verifica se existe pelo menos um número par
const a = 3; b = 10; c = 5;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(true);
}
else {
  console.log(false);
}

// Verifica se existe pelo menos um número ímpar
const d = 3; e = 10; f = 18;

if (d % 2 === 1 || e % 2 === 1 || f % 2 === 1) {
  console.log(true);
}
else {
  console.log(false);
}

Exercício custo e valor de venda

const valorCusto = 50;
const valorVenda = 500;
const impostoSobreOCusto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Valor de entrada inválido!');
}
else {
  console.log('O lucro ao vender mil unidades será: R$' + lucro * 1000 + ',00');
}


