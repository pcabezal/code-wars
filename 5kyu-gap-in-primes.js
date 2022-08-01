function gap(g, m, n) {
  const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
  }

  for (let i = m; i < n; i++) {
    if (isPrime(i)) {
      if (isPrime(i+g)) {
        let truth = true;
        for (let u = i+1; u < i+g-1; u++) {
          if (isPrime(u)) truth = false;
        }
        if (truth) {
          return [i, i+g]
        }
      }
    }
  }

  return null;
}

