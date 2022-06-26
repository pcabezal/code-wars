const maxSequence = function(arr){
    let len = arr.length+1;
    let sumArr = [];
    if (arr.length) {
        for (let ind = 0; ind < len; ind++) {
            for (let i = ind+1; i < len; i++) {
                sumArr.push(arr.slice(ind, i).reduce((p,c) => p+c, 0))
            }
        }
        if (Math.max(...sumArr)>0) {
            return Math.max(...sumArr) 
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

//optimal solution should use kadane's algorithmn