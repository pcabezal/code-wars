function descendingOrder(n){
  arr = n.toString().split('');
  return +arr.sort().reverse().join('');
}