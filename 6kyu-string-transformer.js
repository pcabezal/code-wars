function stringTransformer(str) {
  let reversed = str.split(' ').reverse().join(' ').split('')
  let capped = reversed.map(el => {
    return (el.toUpperCase() == el) ? el.toLowerCase() : el.toUpperCase()
  })
  return capped.join('')
}

console.log(stringTransformer('buttHole poop'));