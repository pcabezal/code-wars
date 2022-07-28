function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode ||
        Date.parse(currentDate) > Date.parse(expirationDate)) 
        return false;
    return true;
}