function pigIt(str){
  //split str into array with split()
  let words = str.split(' ');

  //iterate through array, check for punctuation with regex
  let reggie= /[a-z]/i
  return words.map(e => {
    let first = e[0];
    if (reggie.test(first)) {
      return e.slice(1) + first + 'ay'
    } else {
      return e
    }
  }).join(' ')

}