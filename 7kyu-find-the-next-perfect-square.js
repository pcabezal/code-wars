function findNextSquare(sq) {
  let sqRoot = sq ** .5;
  if (sqRoot % 1 == 0) {
    return (sqRoot + 1) ** 2;
  } else {
    return -1;
  }
}