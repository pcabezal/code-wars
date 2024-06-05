function maskify(cc) {
  let masked = ""
  for (let i = 0; i < cc.length; i++) {
    i < cc.length - 4 ? masked += '#' : masked += cc[i]
  }
  return masked
}

// better solution
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }