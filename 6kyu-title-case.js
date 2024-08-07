function titleCase(title, minorWords) {
    // Split title into lowercase array
    let arr = title.toLowerCase().split(" ");
    // Handle case where minorWords is undefined
    let minors = minorWords ? minorWords.toLowerCase().split(" ") : [];
  
    // Create object dict of minorWords
    let dict = {};
  
    minors.forEach(word => { 
      dict[word] = true;
    });
  
    // Map over the array and capitalize words as needed
    let result = arr.map((word, index) => {
      if (index === 0) {
        // Always capitalize the first word
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else if (dict[word]) {
        // If the word is a minor word, return it as is
        return word;
      } else {
        // Capitalize the first letter of the word
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
  
    // Join the array back into a string and return
    return result.join(" ");
  }