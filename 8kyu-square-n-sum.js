function squareSum(numbers){
  return numbers.reduce((p,c) => p + c**2, 0)
}