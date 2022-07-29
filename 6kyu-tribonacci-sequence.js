function tribonacci(signature,n){
  let arr = [...signature];
  let arr2 = [];
  for (let i = 2; i < n-1; i++) {
    arr.push(arr[i-2] + arr[i-1] + arr[i])
  }
  return arr.slice(0, n)
}