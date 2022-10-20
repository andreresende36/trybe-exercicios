const {encode, decode} = require('./script')

describe ('Testes da função encode(text)', () => {
  test('testa se encode é função',() => {
    expect(typeof encode).toBe('function');
  })
  test('a chamada a,e,i,o,u em encode retorna 1,2,3,4,5',() => {
    expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5');
  })
  test('demais letras e números não são convertidos?', () => {
    expect(encode('b,6,c,7,d,8,f,9,g,0')).toBe('b,6,c,7,d,8,f,9,g,0')
  })
  test('testa se a string retornada pelas funções tem o mesmo número de caracteres que o parâmetro', () =>{
    expect(encode('teste').length).toBe('teste'.length);
  })
})

describe ('Testes da função decode(text)', () => {
  test('testa se decode é função',() => {
    expect(typeof decode).toBe('function');
  })
  test('a chamada 1,2,3,4,5 em decode retorna a,e,i,o,u',() => {
    expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u');
  })
  test('demais letras e números não são convertidos?', () => {
    expect(decode('b,6,c,7,d,8,f,9,g,0')).toBe('b,6,c,7,d,8,f,9,g,0')
  })
  test('testa se a string retornada pelas funções tem o mesmo número de caracteres que o parâmetro', () =>{
    expect(decode('teste').length).toBe('teste'.length);
  })
})