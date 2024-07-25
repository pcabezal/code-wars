function narcissistic(value) {
  //separate value into array
  let str = value.toString();
  let arr = str.split("");
  let power = str.length;
  let sum = 0

  //iterate through arr testing for narcisism
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    sum += num**power;
  }

  return sum == value ? true : false
}
