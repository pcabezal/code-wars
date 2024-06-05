function solution(digits){
  let greatest = 0;
  for (let i = 0; i < digits.length - 4; i++) {
    let current = digits.slice(i, i+5)
    if (+current > greatest) greatest = +current
  }
  return greatest
}