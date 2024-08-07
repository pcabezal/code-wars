function titleCase(title, minorWords) {
  // split title into lowercase array
  let arr = title.toLowerCase().split(" ")
  let minors = minorWords.toLowerCase().split(" ")

  // make object dict of minorWords
  let dict = {}

  minors.forEach(word => { 
    dict[word] = true;
  });

    let result = arr.map((word, index) => {
        if (index == 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else if (dict[word] == true) {
            return word
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });


  return result.join(" ")

}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
