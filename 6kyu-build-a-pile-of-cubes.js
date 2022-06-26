//my solution
function findNb(m) {
    let n = 0;
    let total = 0;
    while (total < m) {
        n++;
        total += n**3;
    }
    return (total == m) ? n : -1;
}

// best practice - O(1)
// this is based on the formula that the sum of the first n cubes equals (n * (n + 1) / 2) ^ 2
// also, the sum of the first n cubes is always a square
// 
// function findNb(m) {
//     m = Math.sqrt(m) * 2;
//     if (m != parseInt(m)){
//       return -1;
//     }
//     var result = parseInt(Math.sqrt(m));
//     return (result * (result + 1) == m) ? result : -1;
// }
