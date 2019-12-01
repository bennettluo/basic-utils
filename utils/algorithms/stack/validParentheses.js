const bracketPair = {
  '{': '}',
  '[': ']',
  '(': ')'
};

function isValidParentheses(s) {
  if (s === '') return true;

  let stack = [];
  for (const str of s.split('')) {
    bracketPair[stack[stack.length - 1]] === str
      ? stack.pop()
      : stack.push(str);
  }

  return stack.length === 0;
}
