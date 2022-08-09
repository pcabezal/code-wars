<<<<<<< HEAD
// too slow
// function sumPairs(ints, s) {
//     let answer = undefined;
//     let answerIdx = ints.length+1;

//     for (let i = 0; i < ints.length; i++) {
//         testArr = ints.slice(i+1);
//         for (let index = 0; index < testArr.length; index++) {
//             if (ints[i] + testArr[index] == s && i + index + 1 < answerIdx) {
//                 console.log(testArr[index], i, index)
//                 answerIdx = i + index + 1;
//                 answer = [ints[i], testArr[index]];
//             } 
//         }
//     }

//     return answer;
// }

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



console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

console.log(sumPairs([10, 5, 2, 3, 15, 12, 7, 5], 10));
=======
// function capitalize(s){
//     let str1 = ''
//     let str2 = ''
//     for (let i = 0; i < s.length; i++) {
//         (i%2 == 0) ? str1 += s[i].toUpperCase() : str1 += s[i]
//     }
//     for (let i = 0; i < s.length; i++) {
//         (i%2 == 0) ? str2 += s[i] : str2 += s[i].toUpperCase() 
//     }

//     return [str1, str2];
// };

function capitalize(s){
    let str1 = ''
    let str2 = ''
    for (let i = 0; i < s.length; i++) {
        if (i%2 == 0) {
            str1 += s[i].toUpperCase();
            str2 += s[i];
        } else {
            str1 += s[i]
            str2 += s[i].toUpperCase() 
        }
    }

    return [str1, str2];
};
>>>>>>> 5925804c2a20acbc6d3683033c87f949865190e8
