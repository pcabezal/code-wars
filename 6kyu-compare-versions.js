function compareVersions (version1, version2) {
  console.log(version1,version2);
  let ver1 = version1.split('.').map(e => parseInt(e))
  let ver2 = version2.split('.').map(e => parseInt(e))

  while (ver1.length > ver2.length) {
    ver2.push(0)
  }

  while (ver2.length > ver1.length) {
    ver1.push(0)
  }

  for (let i = 0; i < ver1.length; i++) {
    if (ver1[i] > ver2[i]) return true
    if (ver2[i] > ver1[i]) return false
  }

  return true;
}

// console.log(compareVersions("10.4.6", "10.4"));
console.log(compareVersions("10.4", "10.10"));