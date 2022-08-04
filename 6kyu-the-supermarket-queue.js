function queueTime(customers, n) {
    cashiers = new Array(n).fill(0)

    customers.forEach((e,i) => {
        for (let index = 0; index < cashiers.length; index++) {
            if (cashiers[index] == Math.min(...cashiers)) {
                cashiers[index] += e;
                break;
            } 
        }
    });

    return Math.max(...cashiers)
}


