const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const skills = (student) => {
  const array = Object.keys(student);
  const array2 = Object.values(student)
  for (let i = 0; i < array.length; i += 1){
    let string = `${array[i]}, Nível: ${array2[i]}`;
    console.log(string);
  }
}

skills(student2);