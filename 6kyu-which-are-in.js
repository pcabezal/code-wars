function inArray(array1,array2){
  let joined = array2.join('.');
  let substrings = [];
  array1.forEach(el => {
    if (joined.includes(el)) substrings.push(el);
  });
  return substrings.sort();
}

