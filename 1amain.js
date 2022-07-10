function queueTime(customers, n) {
    let sum = customers.reduce((p,c) => p + c, 0);
    return sum/n;
  }


console.log(queueTime([], 1));
console.log(queueTime([1,2,3,4], 1));
console.log(queueTime([2,2,3,3,4,4], 2));
console.log(queueTime([1,2,3,4,5], 100));