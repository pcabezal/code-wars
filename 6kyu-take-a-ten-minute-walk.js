// my original solution
function isValidWalk(walk) {
    if (!(walk.length === 10)) return false;
    if (walk.filter(e => e === 'n').length === walk.filter(e => e === 's').length  &&
    walk.filter(e => e == 'w').length === walk.filter(e => e == 'e').length ) return true;
    return false
}

// refactored solution
function isValidWalk(walk) {
    if (!(walk.length === 10)) return false;

    let dx = 0;
    let dy = 0;
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': dy++; break
            case 's': dy--; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }
    return dx === 0 && dy === 0;
}