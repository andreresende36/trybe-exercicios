const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => {
  return array.reduce((a,b) => a.concat(b), [])
}

console.log(flatten(arrays));

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);