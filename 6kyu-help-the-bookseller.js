function stockList(listOfArt, listOfCat){
    console.log(listOfArt, listOfCat);
    if (!listOfArt.length || !listOfCat.length) return '';

    let inventory = {};

    listOfCat.forEach(element => {
        inventory[element] = 0;
    });

    listOfArt.forEach(element => {
        let split = element.split(' ');
        if (inventory.hasOwnProperty(split[0][0])) inventory[split[0][0]] += +split[1];
    });

    let string = '';

    for (const property in inventory) {
        string +=  `(${property} : ${inventory[property]}) - `
    }

    return string.slice(0, -3)
}





b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]
res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

console.log(stockList(b,c));

d = ''
e = ''
f = ["A", "C", "D"]

console.log(stockList(b,f));