function validBraces(braces) {
  const stack = [];
  const matchingBraces = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < braces.length; i++) {
    let el = braces[i];

    if (matchingBraces[el]) {
      // If the element is an opening brace, push it to the stack
      stack.push(el);
    } else {
      // If the element is a closing brace, check if it matches the top of the stack
      let lastBrace = stack.pop();
      if (matchingBraces[lastBrace] !== el) {
        return false; // Mismatched brace
      }
    }
  }

  // If the stack is empty, all braces were matched correctly
  return stack.length === 0;
}

// Example usage
console.log(validBraces("(){}[]"));    // true
console.log(validBraces("([{}])"));    // true
console.log(validBraces("(}"));        // false
console.log(validBraces("[(])"));      // false
console.log(validBraces("[({})](]"));  // false


console.log(validBraces('()[]{}'));