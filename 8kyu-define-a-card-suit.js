function defineSuit(card) {
  switch(card.slice(-1)) {
    case '♣': return 'clubs';
    case '♦': return 'diamonds';
    case '♥': return 'hearts';
    case '♠': return 'spades';
  }
}