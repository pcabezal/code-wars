function race(v1, v2, g) {
    if (v1 >= v2) return null;
    let catchUpTimeHours = g / (v2 - v1);

    let seconds = Math.floor(catchUpTimeHours * 60 * 60);
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours*3600) / 60);
    let finalseconds = Math.floor(seconds - hours*3600 - minutes*60);

    return [hours, minutes, finalseconds]
}
