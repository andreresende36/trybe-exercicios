const longestWord = (string) => {
  const array = string.split(' ');
  array.sort((a,b) => b.length - a.length);
  return `A maior palavra da frase é: '${array[0]}'`;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));