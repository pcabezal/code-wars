function capitalize(s){
    let str1 = ''
    let str2 = ''
    for (let i = 0; i < s.length; i++) {
        if (i%2 == 0) {
            str1 += s[i].toUpperCase();
            str2 += s[i];
        } else {
            str1 += s[i]
            str2 += s[i].toUpperCase() 
        }
    }

    return [str1, str2];
};