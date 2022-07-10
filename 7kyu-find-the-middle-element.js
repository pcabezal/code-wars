function gimme (triplet) {
    let arr = [...triplet].sort((a,b) => a-b);
    return triplet.findIndex(e => e == arr[1])
}
