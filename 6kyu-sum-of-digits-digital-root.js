function digitalRoot(n) {

 let num = n
 // if n.length > 1, split n into array of single digits
 while (num.toString().length > 1) {
  let digits = (""+n).split("");
  let num = digits.reduce((partialSum, a) => partialSum + a, 0)
  console.log(num);
 }
 // sum array
 // repeat
 //return sum
 return num
}

// fricking math

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

console.log(digitalRoot(16));

