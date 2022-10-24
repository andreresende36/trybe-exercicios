const check = (solution, answer) => {
  if (solution === answer){
    return 1;
  } else if (answer === 'N.A'){
    return 0;
  }
  return -0.5;
}

const checker = (solution, answer, func) => {
  let grade = 0;
  solution.forEach((element,i) => {
    let counter = func(element,answer[i]);
    grade += counter;
  });
  return `Pontuação final: ${grade}`;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checker(RIGHT_ANSWERS,STUDENT_ANSWERS,check));