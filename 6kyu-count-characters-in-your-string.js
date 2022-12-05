function count (str) {  
    let arr = str.split('');
    let obj = {};
    arr.forEach(element => {
        obj[element] = obj[element] + 1 || 1;
    })
    return obj;
}

console.log(count('anusa'));

// 2.0

function count (string) {  
    const library = {};
    for (let i = 0; i < string.length; i++) {
      !library[string[i]] ? library[string[i]] = 1 :  library[string[i]]++    
    }
    return library;
  }
  
  console.log(count('aba'));