function adjacentElementsProduct(array) {
  let maxProduct = -Infinity

  for (let i = 1; i < array.length; i++) {
    let product = array[i] * array[i-1]
    if (product > maxProduct) maxProduct = product
  }
  
  return maxProduct
}

