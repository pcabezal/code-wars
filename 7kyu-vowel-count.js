function getCount(str) {
    const arr = str.match(/[aeiou]/gi);
    return (arr) ? arr.length : 0;
}