function comp(arr1, arr2){
    if (arr1 && arr2) {
        let aSort = arr1.sort((a,b) => a-b);
        let bRoot = arr2.map(x => x ** .5).sort((a,b) => a-b);
        return aSort.every((e,i) => (e == bRoot[i])); 
    } else {
        return false
    }
}