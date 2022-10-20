const myFizzBuzz = require('./myFizzBuzz')

describe ('Teste da função myFizzBuzz',() =>{

  test('myFizzBuzz(15) é igual a "fizzbuzz"', () =>{
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  test('myFizzBuzz(9) é igual a "fizz"', () =>{
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  test('myFizzBuzz(20) é igual a "buzz"', () =>{
    expect(myFizzBuzz(20)).toBe('buzz')
  })
  test('myFizzBuzz(17) é igual a 17', () =>{
    expect(myFizzBuzz(17)).toBe(17)
  })
  test('myFizzBuzz("abc") é igual a false', () =>{
    expect(myFizzBuzz('abc')).toBe(false)
  })
})