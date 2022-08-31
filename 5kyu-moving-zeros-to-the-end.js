function moveZeros(arr) {
    let arr1 = [];
    let arr2 = [];
    arr.forEach(el => {
        (el == 0) ? arr2.push(0) : arr1.push(el);
    });
    return arr1.concat(arr2);
}