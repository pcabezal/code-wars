// BRUTE FORCE RAGE
// function repeats(arr){
//   let sum = 0;
//   arr.forEach(el => {
//     if (arr.filter(word => word === el).length === 1) sum += el;
//   });
//   return sum;
// };

// quiet library force
function repeats(arr){
  let library = {};
  let sum = 0;

  arr.forEach(el => {
    if (!library[el]) {
        library[el] = 1;
        sum += el;
    } else {
        sum -= el;
    }
  });

  return sum
};

// someone elses solution which i think is neat
// function repeats(arr) {
//   let set = new Set()
//   arr.forEach(x => set.has(x) ? set.delete(x) : set.add(x))
//   return [...set].reduce((s,v) => s+v, 0)
// }
