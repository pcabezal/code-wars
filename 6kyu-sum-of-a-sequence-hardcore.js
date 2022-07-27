const sequenceSum = (begin, end, step) => {
    if (begin < end && step < 0) return 0;
    let sum = 0;

    if (begin > end && step < 0) {
        for (let i = begin; i >= end; i = i + step) {
            sum += i;
        }
    } else {
        for (let i = begin; i <= end; i = i + step) {
            sum += i;
        }
    }

    return sum;
};
