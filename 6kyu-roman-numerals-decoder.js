function solution (roman) {
  let sum = 0

  let dict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  for (let i = 0; i < roman.length; i++) {
      if (dict[roman[i+1]] > dict[roman[i]]) {
        sum -= dict[roman[i]]
      } else {
        sum += dict[roman[i]]
      }
  }

	return sum;
}
