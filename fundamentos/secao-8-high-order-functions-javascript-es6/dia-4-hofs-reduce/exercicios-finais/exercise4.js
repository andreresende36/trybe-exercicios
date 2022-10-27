const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const sumGrade = (a, b) => a + b
const studentAverage = (array1, array2) => {
  return array1.map((element, i) => {
    const averageGrade = (array2[i].reduce(sumGrade, 0) / array2[i].length)
    return { name: element, average: averageGrade }
  })
}

console.log(studentAverage(students, grades));

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];