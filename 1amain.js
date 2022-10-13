function duplicateCount(text){
  let lowerCase = text.toLowerCase().split('')
  let count = 0;
  let characterDict = {}
  
  lowerCase.forEach(e => {
    if (characterDict[e] == null) {
      characterDict[e] = 0;
    }
    characterDict[e]++;
  })

  for(let key in characterDict){
    let value = characterDict[key]
    if(value > 1) {
      count++;
    } 
  } 
  
  return count
}

console.log(duplicateCount("aabBcde"));