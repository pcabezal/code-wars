function queueTime(customers, n) {
    cashiers = new Array(n).fill(0)


    customers.forEach((e,i) => {
        for (let index = 0; index < cashiers.length; index++) {
            if (cashiers[index] == Math.min(...cashiers)) {
                cashiers[index] += e;
                console.log(cashiers);
                break;
            } 
        }
    });

    return Math.max(...cashiers)
}

// console.log(queueTime([1,2,3,4], 1));
console.log(queueTime([2,2,3,3,4,4], 2));
