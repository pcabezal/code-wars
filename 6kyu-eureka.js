function sumDigPow(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        let num = i.toString().split('');
        let digPow = num.reduce((p,c,i) => p += c**(i+1), 0);
        if (digPow == i) arr.push(i);
    }
    return arr;
}
