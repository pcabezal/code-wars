/* function digitalRoot(n) {

 let num = n
 // if n.length > 1, split n into array of single digits
 while (num.toString().length > 1) {
  let digits = (""+n).split("");
  num = digits.reduce((partialSum, a) => partialSum + a, 0)
  console.log(num);
 }
 // sum array
 // repeat
 //return sum
 return num
}

console.log(digitalRoot(16)); */

console.log( (""+16).split(""));