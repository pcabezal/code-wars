function factorial(n)
{
    if (n > 12 || n < 0) throw new RangeError('bad range yo');
    let fact = 1;
    for (let i = 2; i <= n; i++)
        fact = fact * i;
    return fact;
}