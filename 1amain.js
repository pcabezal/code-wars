function count (string) {  
  const library = {};

  for (let i = 0; i < string.length; i++) {
    !library[string[i]] ? library[string[i]] = 1 :  library[string[i]]++    
  }

   return library;
}

console.log(count('aba'));