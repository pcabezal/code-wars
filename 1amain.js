function diamond(n){
    if (n%2 == 0 || n <= 0) return null;
    let diam = '';
    let half = Math.ceil(n/2);
    let star = '*';
    let space = ' ';

    for (let i = 0; i < n; i++) {
        if (i < half) string += 
        
    }



    return half;
}


// function diamond(l, i = 1) {
//     const
//         STAR = '*',
//         SPACE = ' ',
//         LINE = SPACE.repeat((l - i) / 2) + STAR.repeat(i);

//     console.log(LINE);
//     if (i >= l) return;
//     diamond(l, i + 2);
//     console.log(LINE);
// }

console.log(diamond(3));
console.log(diamond(5));

// console.log(" *\n***\n *\n");