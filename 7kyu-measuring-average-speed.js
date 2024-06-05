function calculateSpeed(distance, time) {
  // change distance string into number of meters
    const distanceNumber = parseInt(distance)
    const meters = distance.endsWith('km') ? distanceNumber * 1000 : distanceNumber
    console.log(meters + 'meters');
  // change time string into number of seconds
    const timeNumber = parseInt(time)
    const seconds = time.endsWith('s') ? timeNumber : timeNumber * 60
    console.log(seconds + 'seconds');
  // divide distance / time, return rounded integer converted to mph
    return Math.round((meters / seconds) * 2.23694) + 'mph'
  }

  console.log(calculateSpeed('100m', '20s' ));
  console.log(calculateSpeed('3km', '5min' ));
  console.log(calculateSpeed('1000km', '20min' ));