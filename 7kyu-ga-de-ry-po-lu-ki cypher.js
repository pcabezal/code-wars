function transform(str) {
  const key = "GA-DE-RY-PO-LU-KI";
  const map = {};
  
  for (let i = 0; i < key.length; i += 3) {
    const char1 = key[i];
    const char2 = key[i + 1];
    
    map[char1] = char2;
    map[char2] = char1;
    map[char1.toLowerCase()] = char2.toLowerCase();
    map[char2.toLowerCase()] = char1.toLowerCase();
  }
  
  return str.split('').map(char => map[char] || char).join('');
}

const encode = transform;
const decode = transform;