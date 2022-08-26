// doesnt complete the larger test cases but i cant figure out why! seems to be solid to me. frick.

function uniqCount(str) {
    let n = str.toLowerCase();
    let arr = n.split('');
    let same = 1;

    const counts = {};
    arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    function fact(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * fact(num - 1));
        }
    }

    for (const item in counts) {
        if (counts[item] > 1) same *= fact(counts[item]);
    }

    return (same>1) ? BigInt(fact(n.length)) / BigInt(same) : BigInt(fact(n.length))

}
