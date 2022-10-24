const employeeReg = (name) =>{
  
  const email = `${name.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().split(' ').join('_')}@trybe.com`;

  // Minhas respostas estão aqui comentadas
  // const arrayName = name.split(' ');
  // const email = '';
  // arrayName.forEach((element,i) => {
  //   if(i+1 < arrayName.length){
  //     email += `${element.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}_`
  //   } else {
  //     email += `${element.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}@trybe.com`
  //   }
  // });
  
  return {nomeCompleto: name, email: email}
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiz Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeeReg));