function wave(str){
    let arr = [];
    for (let i = 0; i < str.length; i++) { 
        let regex = new RegExp(`^.{${i}}[a-z]`)
        if ( str[i] !== ' ') {
            arr.push(str.slice(0, i) +
                str.replace(regex, str[i].toUpperCase()))
        }

    }
    return arr;
}


// create an array of length equal to str length
// each element of array will be string str, and have one letter capitalized, 
// starting at 0 and progressing until it reaches final character.

// for loop using str.length
// replace char at i using regex, push to array

