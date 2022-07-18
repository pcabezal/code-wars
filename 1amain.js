function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window > h) return -1;
    let bounceHeight = h * bounce;
    let passCount = 1;
    while (bounceHeight > window) {
        passCount += 2;
        bounceHeight = bounce * bounceHeight;
    }
    return passCount;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
