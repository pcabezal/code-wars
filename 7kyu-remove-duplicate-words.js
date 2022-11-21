const removeConsecutiveDuplicates = s => {
  let split = s.split(' ');

  let uniques = [];

  for (let i = 0; i < split.length; i++) {
     if (split[i] !== split[i+1]) uniques.push(split[i])
  }

  return uniques.join(' ')
}

//better
function removeConsecutiveDuplicates(str) {
  return str
    .split(" ")
    .filter((word, index, arr) => word !== arr[index + 1])
    .join(" ");
}

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));