// Cálculo de salário líquido

// Declaração de variáveis

let salarioBruto = 3000;
let salarioLiquido;
let salarioBase;
let aliquotaInss;
let aliquotaIr;

// Verificação de alíquota do INSS 

if (salarioBruto >= 0 && salarioBruto <= 1556.94) {
    aliquotaInss = 0.08 * salarioBruto;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaInss = 0.09 * salarioBruto;
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaInss = 0.11 * salarioBruto;
}
else if (salarioBruto > 5189.82) {
    aliquotaInss = 570.88;
}
else {
    console.log('Valor de salário bruto inválido!');
}

// Cálculo de salário-base

salarioBase = salarioBruto - aliquotaInss;

//  Verificação de alíquota IR

if (salarioBase >= 0 && salarioBase <= 1903.98) {
    aliquotaIr = 0;
}
else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIr = (0.075 * salarioBase) - 142.80;
}
else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    aliquotaIr = (0.15 * salarioBase) - 354.80;
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIr = (0.225 * salarioBase) - 636.13;
}
else if (salarioBase > 4664.68) {
    aliquotaIr = (0.275 * salarioBase) - 869.36;
}
else {
    console.log('Valor de salário-base inválido!');
}

// Cálculo de salário líquido

salarioLiquido = salarioBase - aliquotaIr;
console.log('O valor do salário líquido é: R$' + salarioLiquido);