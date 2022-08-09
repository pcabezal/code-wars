function revrot(str, sz) {
    if (sz <= 0 || str == '' || sz > str.length) return '';

    let arr = [];
    for (let i = 0; i <= str.length - sz; i = i+sz) {
        arr.push(str.slice(i, i+sz))
    }

    return arr.map(e => {
        let nums = e.split('')
        let cubes = nums.reduce((p,c) => p + c**3, 0)
        if (cubes % 2 == 0) {
            return nums.reverse().join('')
        } else {
            return e.slice(1) + e.slice(0,1)
        }
    }).join('')
}

// console.log(revrot("12345", 2));
console.log(revrot("9135044937733376401776095976148123611972335679347574848323418511489866627569", 7));

// cut str into chunks of size sz, ignore final chunk if smaller than sz
// if chunk sum of cubes of digits %2==0, reverse it
// else rotate to left by one position
// concatenate chunks and return as string