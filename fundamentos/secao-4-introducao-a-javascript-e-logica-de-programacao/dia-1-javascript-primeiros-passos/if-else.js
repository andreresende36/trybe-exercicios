const num1 = 10, num2 = 26, num3 = 35;

// Retorna o maior de 2 números
if (num1 > num2) {
  console.log('O maior número é: ' + num1);
}
else if (num2 > num1) {
  console.log('O maior número é: ' + num2);
}
else {
  console.log('Números iguais');
}

// Retorna o maior de 3 números
if (num1 > num2 && num1 > num3) {
  console.log('O maior número é: ' + num1);
}
else if (num2 > num1 && num2 > num3) {
  console.log('O maior número é: ' + num2);
}
else if (num3 > num1 && num3 > num2) {
  console.log('O maior número é: ' + num3);
}
else {
  console.log('Números iguais');
}

// Positivo, Negativo ou Zero
let param1 = -10;

if (param1 > 0) {
  console.log('positive');
}
else if (param1 < 0) {
  console.log('negative');
}
else {
  console.log('zero');
}

// Verifica ângulos de um triângulo
const ang1 = 30, ang2 = 60, ang3 = 90;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log('O ângulo inserido é inválido');
}
else if ((ang1 + ang2 + ang3) == 180) {
  console.log(true);
}
else {
  console.log(false);
}







