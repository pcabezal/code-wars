function twoOldestAges(ages) {
  let first = -Infinity;
  let second = -Infinity;

  for (let age of ages) {
      if (age > first) {
          second = first;
          first = age;
      } else if (age > second) {
          second = age;
      }
  }

  return [second, first];
}