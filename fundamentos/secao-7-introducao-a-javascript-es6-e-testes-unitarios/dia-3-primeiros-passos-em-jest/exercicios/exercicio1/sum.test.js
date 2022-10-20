const sum = require('./sum');

describe ('Teste da Função sum()', () => {

  test('Testa se o retorno de sum(4,5) é 9', () =>{
    expect(sum(4,5)).toBe(9);
  })

  test('Testa se o retorno de sum(0,0) é 0', () =>{
    expect(sum(0,0)).toBe(0);
  })

  test('Testa se o retorno de sum(4,"5") lança um erro', () =>{
    expect(() =>{sum(4,"5")}).toThrow();
  })

  test('Testa se o retorno de sum(4,"5") lança um erro "parameters must be numbers"', () =>{
    expect(() =>{sum(4,"5")}).toThrow('parameters must be numbers');
  })
})