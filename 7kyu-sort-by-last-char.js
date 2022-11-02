function last(x){
  return x.split(' ').sort(function compareFn(a,b) {
    if (a.slice(-1) < b.slice(-1)) return -1
  })
}



console.log(last('man i need a taxi up to ubud'));
