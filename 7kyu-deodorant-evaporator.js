function evaporator(content, evap_per_day, threshold){ 
  let thres = content * (threshold / 100);
  let evap = evap_per_day / 100;
  let level = content;
  let dayCount = 0;
  while (level >= thres) {
    dayCount++;
    level *= (1-evap);
  }
  return dayCount;
}


//optimal
function evaporator(content, evap_per_day, threshold){ 
  threshold = threshold / 100
  evap_per_day = evap_per_day / 100
  return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
}