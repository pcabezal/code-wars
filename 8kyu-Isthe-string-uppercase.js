String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}


console.log('c'.isUpperCase());
console.log('C'.isUpperCase());