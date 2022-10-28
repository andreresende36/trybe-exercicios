const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

// Minha resposta
const filterPeople = (array) => {
  return array.reduce((acc, currPerson,i) => {
    const { name, bornIn, nationality } = currPerson
    if (bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian') {
      acc.push(name);
      return acc
    }
    return acc
  }, [] ).join(', ');
}

//Gabarito
const filterPeople1 = (arr) => {
  return people.filter(({ nationality, bornIn }) => {
    return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
  });
}

console.log(filterPeople(people));
console.log(filterPeople1(people));