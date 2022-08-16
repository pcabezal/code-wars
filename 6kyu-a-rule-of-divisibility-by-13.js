function thirt(n) {
    let mults = [1, 10, 9, 12, 3, 4];
    let num = n;
    let result = 0;
    let res;


    while ( result !== res) {
        res = 0;
        num = n.toString().split('').reverse();

        let ind = -1;
        for (let i = 0; i < num.length; i++) {
            ind++;
            if (ind > 5) ind = 0;
            res += num[i] * mults[ind];
        }

        if (result !== res) {
            n = res;
            result = res;
            res = 0;
        }
    }

    
    return result;
}

// way better
// const remainders = [1, 10, 9, 12, 3, 4];

// function thirt(n) {
//     const r = n
//       .toString()
//       .split('')
//       .reverse()
//       .reduce( (a,b, index) => parseInt(a) + b*remainders[index%remainders.length] );

//       return n === r ? parseInt(n) : thirt(r);
      
// }