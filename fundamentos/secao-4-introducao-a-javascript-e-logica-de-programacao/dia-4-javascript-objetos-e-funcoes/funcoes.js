function verificaPalindrome (word){
  let inverso = [];
  for (let letra of word){
    inverso.unshift(letra);
  }
  if (inverso.join('') === word){
    return true;
  }
  else {
    return false;
  }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
console.log(verificaPalindrome('ana'));
console.log(verificaPalindrome('banana'));