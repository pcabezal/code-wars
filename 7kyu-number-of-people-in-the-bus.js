var number = function(busStops){
  let onBus = 0;
  busStops.forEach(e => {
    onBus += e[0] - e[1];
  });
  return onBus;
}

console.log(number([[10,0],[3,5],[5,8]]));