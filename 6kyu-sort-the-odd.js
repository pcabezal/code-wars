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

// v2.0
function sortArray(array) {
  // filter out even numbers, then sort odd numbers in ascending order
   let sorted = array.filter(x => x%2 !== 0).sort((a,b) => a - b);
   
   // loop through original array replacing odd numbers with sorted values
   let pointer = 0;
   for (let i = 0; i < array.length; i++) {
     if (array[i] % 2 !== 0) {
       array[i] = sorted[pointer];
       pointer++;
     }
   }
   return array
 }