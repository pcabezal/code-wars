function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    multiplyAndAdd = [age1,age2,age3,age4,age5,age6,age7,age8].reduce((p,c) => p + c**2, 0)
    return Math.floor((multiplyAndAdd**.5)/2)
}

// fun new function
// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;