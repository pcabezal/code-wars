function uniqueInOrder(it) {
    let result = []

    for (let i = 0; i < it.length; i++) {
        if (it[i] !== result[result.length - 1]) result.push(it[i])
    }

    return result
}
