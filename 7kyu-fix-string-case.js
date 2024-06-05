function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

function solve(s){
  let capital = 0
  let lowercase = 0
  //iterate through input string, count lowercase and capitals
  for (let c of s) {
    isUpperCase(c) ? capital++ : lowercase++
  }

  // determine which conversion, iterate through dictionary into new string
  let converted = ''
  if (lowercase >= capital) {
    for (let c of s) {
      isUpperCase(c) ? converted += c.toLowerCase() : converted += c
    }
  } else {
    for (let c of s) {
      isUpperCase(c) ? converted += c : converted += c.toUpperCase()
    }
  }

  return converted
}