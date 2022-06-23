function rot13(message){
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let lowAlpha = alpha.split('');
    let capAlpha = alpha.toUpperCase().split('');
    let arr = message.split('');
    for (let i = 0; i < message.length; i++) {
        if (/[A-Z]/.test(message[i])) {
            indeks = capAlpha.indexOf(message[i]);
            (indeks < 13) ? arr[i] = (capAlpha[indeks + 13]) : arr[i] = (capAlpha[indeks - 13]);
        } else if (/[a-z]/.test(message[i])){
            indeks = lowAlpha.indexOf(message[i]);
            (indeks < 13) ? arr[i] = (lowAlpha[indeks + 13]) : arr[i] = (lowAlpha[indeks - 13]);
        }
    }
    return arr.join('');
}
