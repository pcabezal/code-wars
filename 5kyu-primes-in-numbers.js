function primeFactors(n){
    let divisor = 2;
    let newb = n;
    let arr = [];

    function breakDown() {
        divisor = 2;
        while (divisor <= newb) {
            if (newb % divisor == 0) {
                newb = newb / divisor;
                arr.push(divisor);
                breakDown();
                break;
            }
            divisor++
        }
    }
    breakDown();

    theSet = new Set(arr);
    resultString = '';

    theSet.forEach(element => {
        let length = arr.filter(e => e == element).length
        if (length>1) {
            resultString += `(${element}**${length})`
        } else {
            resultString += `(${element})`
        }
    });

    return resultString;
}

console.log(primeFactors(48));
console.log(primeFactors(86240));