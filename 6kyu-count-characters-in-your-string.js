function count (str) {  
    let arr = str.split('');
    let obj = {};
    arr.forEach(element => {
        obj[element] = obj[element] + 1 || 1;
    })
    return obj;
}

console.log(count('anusa'));