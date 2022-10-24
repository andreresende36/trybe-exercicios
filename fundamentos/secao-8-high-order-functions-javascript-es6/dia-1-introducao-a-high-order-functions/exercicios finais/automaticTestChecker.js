const check = (array1, array2) => {
  let grade = 0;
  array1.forEach((element,i) => {
    if (element === array2[i]){
      grade += 1;
    } else if (element === 'N.A'){
      grade += 0;
    } else if (element !== array2[i] ) {
      grade -= 0.5;
    }
  });
  return `A pontuação final da pessoa estudante é: ${grade}`;
}

const checker = (solution, answer, func) => {
  return func(answer,solution);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checker(RIGHT_ANSWERS,STUDENT_ANSWERS,check));