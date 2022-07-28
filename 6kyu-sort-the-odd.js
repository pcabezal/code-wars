function sortArray(array) {
  let odds = array.filter(e => (e%2 == 1 || e%2 == -1)).sort((a,b) => a-b);
  let ind = -1;
  let swapped = array.map((e,i) => {
    if (e%2== 1 || e%2 == -1) {
      ind++;
      return odds[ind];
    } else {
      return e;
    }});
  return swapped;
}