function duplicateCount(text){
  arr = text.toLowerCase().split('').sort();
  let redux = [];
  arr.forEach((e,i) => {
    if (e == arr[i+1]) {
      redux.push(e);
    }
  });
  const mySet = new Set(redux);
  return mySet.size;
}
