// My solution
function isIsogram(str){
    let lowStr = str.toLowerCase();
    for (let i = 0; i < lowStr.length; i++) {
        if (lowStr.substring(0, i).includes(lowStr[i]) ||
            lowStr.substring(i+1).includes(lowStr[i]))
        {
            return false;
        }
    }
    return true;
}

// Optimal solution
// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }