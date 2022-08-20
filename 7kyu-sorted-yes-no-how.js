function isSortedAndHow(arr) {
    function arrayEquals(a, b) {
        return a.every((val, index) => val === b[index]);
    }

    let array = arr.slice()

    if (arrayEquals(arr, array.sort((a,b) => a-b))) return 'yes, ascending';
    if (arrayEquals(arr, array.sort((a,b) => b-a))) return 'yes, descending';
    return 'no';
}