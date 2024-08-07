String.prototype.camelCase=function(){
  if (this == "") return ""

  return this
    .toLowerCase()
    .split(" ")
    .reduce((result, word) => result + word[0].toUpperCase() + word.slice(1), "")
    
}