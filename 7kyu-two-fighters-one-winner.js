function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let winner = '';

  function attack(a,b) {
    b.health -= a.damagePerAttack;
    if (b.health > 0) {
      console.log(`${a.name} attacks ${b.name}; ${b.name} now has ${b.health} health.`)
    } else {
      console.log(`${a.name} attacks ${b.name}; ${b.name} now has ${b.health} health and is dead. ${a.name} wins`);
      winner = a.name
    };
  }

  let first = {}
  let second = {}

  if (fighter1.name == firstAttacker) {
    first = fighter1;
    second = fighter2;
  } else {
    first = fighter2;
    second = fighter1;
  }

  while (first.health > 0 && second.health > 0) {
    attack(first, second);
    if (second.health > 0) attack(second, first);
  }

  return winner;
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));