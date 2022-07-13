function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';
  let count = 0;
  let arr = [];
  let word = '';

  strarr.forEach((e,i) => {
    if(strarr[i+k-1]) {
      while (count < k) {
        word += strarr[i];
        i++;
        count++;
      }
      arr.push(word);
      word = '';
      count = 0;
    }
  });

  console.log(arr.map(e => e.length));

  max = Math.max(...arr.map(e => e.length))

  return arr.find(e => e.length == max);

}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3));