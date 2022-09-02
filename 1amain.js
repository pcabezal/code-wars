function solution(number){
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) arr.push(i)
  }
  return arr.reduce((p,c) => p + c)
}

console.log(solution(10));