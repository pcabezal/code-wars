function getMiddle(s)
{
    let len = s.length;
    return len % 2 == 0 ? s.slice(len/2 - 1, len/2 + 1) : s.slice(len/2, len/2 + 1)
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));