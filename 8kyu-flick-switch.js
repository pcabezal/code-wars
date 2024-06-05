function flickSwitch(arr){
  let light = true
  let flicked = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      light = !light
    }
    flicked.push(light)
  }
  return flicked
}