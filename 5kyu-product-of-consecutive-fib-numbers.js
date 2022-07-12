function productFib(prod){
  let fib = [0, 1];
  let sum = 0;
  let i = 2;
  while (sum < prod) {
    fib.push(fib[i-1] + fib[i-2]);
    sum = fib[i]* fib[i-1];
    i++
  }
  return (sum == prod) ? [fib[i-2], fib[i-1], true] : [fib[i-2], fib[i-1], false];
}

console.log(productFib(4895));