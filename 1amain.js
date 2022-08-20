function isSortedAndHow(arr) {
    function arrayEquals(a, b) {
        return a.every((val, index) => val === b[index]);
    }

    let array = arr.slice()

    if (arrayEquals(arr,array.sort((a,b) => a-b))) return 'yes, descending';
    if (arrayEquals(arr,array.sort((a,b) => b-a))) return 'yes, ascending';
    return 'no';

}

console.log(isSortedAndHow([15, 7, 3]));

console.log(isSortedAndHow([1,2,3]));

console.log(isSortedAndHow([15, 56, 3, -8]));