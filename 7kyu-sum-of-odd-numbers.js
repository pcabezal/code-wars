function rowSumOddNumbers(n) {
    let rowSum;
    let count = 1;
    let row = 1;

    for (let i = 0; i < n; i++) {
        rowSum = 0;
        for (let i = 0; i < row; i++) {
            rowSum += count;
            count += 2;
        }        
        row++;       
    }

    return rowSum;
}

// optimal solution
// fuck me 
// const rowSumOddNumbers = n => n ** 3;