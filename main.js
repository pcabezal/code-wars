function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    console.log(principal, interest, tax, desired);
    while(principal <= desired) {
        years++;
        let int = principal * interest;
        principal = principal + int - tax*int
    }

    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000,0.05,0.18,1000));