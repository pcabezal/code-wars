function sortByLength (array) {
    return array.map(e => [e.length, e])
        .sort((a,b) => a[0]-b[0])
        .map(e => e[1]);
};

// oh i guess that was redundant, wasnt it

// function sortByLength (array) {
//     return array.sort((a,b) => a.length - b.length);
// };
