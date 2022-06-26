function duplicateEncode(input){
  let word = input.toLowerCase();
  let newStr = '';
  for (let i = 0; i < word.length; i++) {
      if (word.indexOf(word[i]) == word.lastIndexOf(word[i])) {
          newStr += `(`;
      } else {
          newStr += `)`;
      }  
  }
  return newStr;
}