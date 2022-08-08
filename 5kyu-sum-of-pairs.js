
function sumPairs(ints, s) {
    let answer = undefined;
    let answerIdx = ints.length+1;
    let lastNumber;

    for (let i = 0; i < ints.length; i++) {
        if (lastNumber && lastNumber === ints[i]) {continue;}
        lastNumber = ints[i];

        testArr = ints.slice(i+1);
        for (let index = 0; index < testArr.length; index++) {
            if (ints[i] + testArr[index] == s && i + index + 1 < answerIdx) {
                answerIdx = i + index + 1;
                answer = [ints[i], testArr[index]];
            } 
        }
    }

    return answer;
}

// better solution
// function sum_pairs(ints, s) {
//     let seen = new Set();
//     for (let i of ints) {
//       if (seen.has(s - i)) return [s - i, i];
//       seen.add(i);
//     }
//   }