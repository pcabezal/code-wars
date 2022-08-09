var encryptThis = function(texts) {
    arr = texts.split(' ');

    newArr = arr.map(text => {
        ascii = text.charCodeAt(0);
        if(text.length > 2) {
            word = text.slice(1)
            newWord = ascii + word.slice(-1) + word.slice(1, -1) + word[0]
        } else if (text.length == 2) {
            newWord = ascii + text[1]
        } else {
            newWord = ascii
        }
        return newWord
    })

    return newArr.join(' ')
}
