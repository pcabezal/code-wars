const capitals = function (word) {
    let arr = word.split('');
    let capsArr = [];
    arr.forEach((element, index) => {
        if (element.match(/[A-Z]/)) capsArr.push(index)
    });
    return capsArr;
};
