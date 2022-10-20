const myRemove = require('./myRemove')

describe('Testes da Função myRemove()', () => {
  test('Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1,2,4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  })

  test('Testa se a chamada myRemove([1, 2, 3, 4], 3) NÃO retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  test('Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})