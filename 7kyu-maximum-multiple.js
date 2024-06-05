function maxMultiple(divisor, bound){
  for (let i = bound; i >= divisor * 2; i--) {
    if (i % divisor == 0) return i
  }
}

// O(1) fuck
// function maxMultiple(divisor, bound){
//     return bound-bound%divisor
//   }