// function count (str) {  
//     let arr = str.split('');
//     let obj = {};
//     arr.forEach(element => {
//         obj[element] = obj[element] + 1 || 1;
//     })
//     return obj;
// }

// console.log(count('anusa'));

// 2.0

function count (string) {  
    const library = {};
    for (const s in string) {
        !library[s] ? library[s] = 1 : library[s]++
    }
    return library;
}
  
console.log(count('aba'));