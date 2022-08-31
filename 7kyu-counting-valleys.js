function countingValleys(s) {
  let arr = s.split('');
  let level = 0;
  let count = 0;

  arr.forEach(el => {
    if (el == 'U' && level == -1) {
      count++; 
      level++;
    } else if (el == 'U') {
      level++;
    }
    if (el == 'D') level--;
  });

  return count;
}