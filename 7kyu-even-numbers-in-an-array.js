function evenNumbers(array, number) {
  let answer = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (answer.length >= number) break;
    if (array[i] % 2 == 0) answer.unshift(array[i])
  }
  return answer;
}
