// const number = function(array){
//     let num = 1;
//     for (let i = 0; i < array.length; i++) {
//         array[i] = `${num}: ${array[i]}`;
//         num++;
//     }
//     return array;
// }

const number = function(array) {
    return array.map((el, index) => `${index + 1}: ${el}` )
}

console.log(number(["a", "b", "c"]))


// var number = function(array) {
//     return array.map(function (line, index) {
//       return (index + 1) + ": " + line;
//     });
//   }