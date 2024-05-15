function sumDigits(number) {
  let string = String(number)
  if (string[0] == "-") {
    string = string.slice(1)
  }

  let intArr = Array.from(string);

  let sum = 0
  for (let i = 0; i < intArr.length; i++) {
    sum += +intArr[i]
  } 
  return sum
}

console.log(sumDigits(12))
sumDigits(-35)