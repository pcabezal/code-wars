function incrementString (string) {
    if (!string) return 1
    let letters = string.match(/[a-z]/gi).join('');
    let numbers = string.match(/\d/g);
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

console.log(incrementString("foobar000"));