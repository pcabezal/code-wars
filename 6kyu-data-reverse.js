function dataReverse(data) {
    let arr = [];
    let concat = data.join('');
    let i = 0;
    while (i < concat.length) {
        arr.unshift(concat.slice(i, i+8) )
        i += 8;
    }
    return arr.join('').split('').map(e => +e);
}

// better 
// const dataReverse = data => {
//     const bytes = [];
//     for (let i = 0; i < data.length; i += 8) {
//       bytes.unshift(...data.slice(i, i + 8));
//     }
//     return bytes;
//   };