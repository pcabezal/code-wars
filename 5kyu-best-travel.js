const chooseBestSum = (t, k, ls) =>
  ls.reduce((pre, val) => [...pre, ...pre.filter(val => val.length < k).map(v => [...v, val])], [[]])
    .filter(val => val.length === k)
    .map(val => val.reduce((pre, val) => pre + val))
    .filter(val => val <= t)
    .sort((a, b) => a - b).pop() || null;

    // refactor