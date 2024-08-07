String.prototype.camelCase=function(){
  if (this == "") return ""

  let arr = this.toLowerCase().split(" ")

  return arr.reduce((result, word) => result + word[0].toUpperCase() + word.slice(1), "")
    
 

}