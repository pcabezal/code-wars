function accum(s) {
 arr = s.toLowerCase().split('');
 str = '';
 arr.forEach((e,i) => {
  str += e.toUpperCase() + e.repeat(i) + '-'; 
 });
 return str.slice(0, -1);
}

console.log(accum("abcd"));