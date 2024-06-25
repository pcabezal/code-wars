function largestPairSum (numbers) {
  let first = -Infinity
  let second = -Infinity

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= first) {
      second = first;
      first = numbers[i]
    }
    if (numbers[i] < first && numbers[i] >= second) {
      second = numbers[i]
    }
  }

  return first + second
}