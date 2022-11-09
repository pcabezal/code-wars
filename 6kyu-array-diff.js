function arrayDiff(a, b) {
  setB = new Set(b)
  return a.filter(word => !setB.has(word))
}