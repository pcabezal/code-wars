function solve(a,b){
  let evCount = 0;

  for (let i = a; i < b; i++) {
    let num = i.toString()
    if (/^[853]+$/.test(num)) { 
      let eights = 0;
      let fives = 0;
      let threes = 0;
      for (let j = 0; j < num.length; j++) {
        if (num[j] == 8) eights++;
        if (num[j] == 5) fives++;
        if (num[j] == 3) threes++;
      }
      if (eights >= fives && fives >= threes) {


        evCount++;
      }
    }
  }


  return evCount

}

solve(0,100)