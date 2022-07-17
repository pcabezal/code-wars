// i'm not proud but I did it

function incrementString (string) {
    if (!string) return '1'
  
    let letters = string.match(/[a-z]/gi);
    if (letters) {
      letters = letters.join('');
    } else {
      letters = '';
    }
  
    let numbers = string.match(/\d/g);
    if (!numbers) return letters + 1;
  
    let finalNum = '';

    let firstNonZero = numbers.findIndex(e => e > 0);
    let nonZeros = numbers.slice(firstNonZero);
    let zeros = numbers.slice(0, firstNonZero);
    let incremented = (+nonZeros.join('') + 1).toString();

    if (incremented.length == nonZeros.length)  {
        finalNum += zeros.join('') + incremented;
    } else {
        finalNum += zeros.slice(1).join('') + incremented;
    }

    return letters + finalNum;

}