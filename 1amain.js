function narcissistic(value) {
  //separate value into array
  let str = value.toString();
  let arr = str.split();
  let power = value.length;
  let sum = 0
console.log(arr);
  //iterate through arr testing for narcisism
  for (let i = 0; i < arr.length; i++) {
    let num = +arr[i]
    console.log(num);
    console.log(power);
    sum += num**power;
  }

  console.log("sum" + sum)
  console.log("value" + value);
  return sum == value ? true : false
}
