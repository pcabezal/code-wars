String.prototype.capitalize = function() {
  var firstChar = this.charCodeAt(0);
  if (firstChar >= 97 && firstChar <= 122) {
    firstChar -= 32
  }
  return String.fromCharCode(firstChar) + this.slice(1);
}

