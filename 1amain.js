String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1)
}

console.log('poop'.capitalize());