function rowWeights(array){
    let team1 = 0;
    let team2 = 0;

    for (let i = 0; i < array.length; i++) {
        (i % 2 == 0) ? team1 += array[i] : team2 += array[i]
    }

    return [team1, team2]
}