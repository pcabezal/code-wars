function race(v1, v2, g) {
    if (v1 >= v2) return null;
    let catchUpTimeHours = g / (v2 - v1);

    let seconds = Math.floor(catchUpTimeHours * 60 * 60);
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours*3600) / 60);
    let finalseconds = Math.floor(seconds - hours*3600 - minutes*60);

    return [hours, minutes, finalseconds]
}

console.log(race(720, 850, 70));

console.log(race(80, 91, 37));

//0.5384615384615384

// .538 * 60 min = 