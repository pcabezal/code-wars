function getParticipants(shakes){
  if (shakes === 0) return 00;
  for (let people = 2; people <= shakes+1; people++) {
    if (((people*(people - 1)) / 2) >= shakes) return people;
  };
}