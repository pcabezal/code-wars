function anagrams(word, words) {
    let arr = [];
    let sorted = word.split('').sort().join('');
    words.forEach(element => {
        if (element.split('').sort().join('') == sorted) arr.push(element);
    });
    return arr;
}

