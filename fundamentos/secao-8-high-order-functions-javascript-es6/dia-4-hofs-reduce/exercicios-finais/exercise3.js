const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const callback = (acc,curr,i,array) => {
  const arrayWord = curr.toLowerCase().split('').filter((element) => element === 'a')
  return acc + arrayWord.length
}
const containsA = (array) => {
  return array.reduce(callback, 0)
}
console.log(containsA(names));