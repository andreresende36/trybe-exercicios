// const numbers = [50, 85, -30, 3, 15];

// Resolução com for
const maiorNumber = (array) => {
  let biggestNumber = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }
  return biggestNumber
}
// console.log(maiorNumber(numbers));

// Resolução com reduce()
const compareNumber = (a, b) => a > b ? a : b;
const biggestNumber = (array) => array.reduce(compareNumber)

// console.log(biggestNumber(numbers));

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (a, b) => b % 2 === 0 ? a + b : a;
const sumEven = (array) => array.reduce(isEven, 0);

// console.log(sumEven(numbers));