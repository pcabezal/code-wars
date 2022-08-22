var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(inputNum) {
        if (inputNum < 0) {
            return `${inputNum}<0`;
        } else if (inputNum == 0) {
            return `0=0`
        } else {
            let sum = [];
            for (let i = 0; i <= inputNum; i++) {
                sum.push(i)
            }
            return sum.join(`+`) + ` = ` + sum.reduce((p,c) => p + c, 0);
        }
    };
  
    return SequenceSum;
  
  })();