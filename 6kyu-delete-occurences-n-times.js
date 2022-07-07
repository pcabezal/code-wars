function deleteNth(arr,n){
    let newArr = [];
    arr.forEach(e => {
        if (newArr.filter(x => x == e).length < n) newArr.push(e)
    });
    return newArr;
}

console.log(deleteNth([20,37,20,21,20,20], 3),);