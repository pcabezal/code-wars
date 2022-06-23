function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired) {
        years++;
        let int = principal * interest;
        principal = principal + int - tax*int;
    }
    return years;
}