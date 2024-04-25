function cantor(nestedList) {
  let newList = []
  for (let i = 0; i < nestedList.length; i++) {
    newList.push(+!nestedList[i][i]);
  }
  return newList
}



console.log(cantor([[1,0], [1,0]]));

