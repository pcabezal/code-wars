function persistence(num) {
    let mult = num;
    let split = '';
    let count = 0;

    while (mult.toString().length > 1){
        split = mult.toString().split('');
        mult = split.reduce((p,c) => p * c);
        count++;
    }

    return count
 }

console.log( persistence(999));