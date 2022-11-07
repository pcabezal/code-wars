function findDeletedNumber(arr, mixArr) {
  let arrSum = arr.reduce((p,c) => p + c, 0)
  let mixSum = mixArr.reduce((p,c) => p + c, 0)
  
  return arrSum - mixSum
}