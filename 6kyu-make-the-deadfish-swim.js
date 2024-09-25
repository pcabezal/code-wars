// Return the output array, and ignore all non-op characters
function parse(data){
  let arr = [];
  let val = 0;

  for (let char of data) {
    switch (char) {
      case "i": val++; break;
      case "d": val--; break;
      case "s": val **= 2; break;
      case "o": arr.push(val); break;
    }
  }

  return arr  
}
