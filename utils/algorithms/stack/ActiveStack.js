let stack = [];
let current = 0;
let stackType = 'min';

class ActiveStack {
  constructor() {}

  push(n) {
    if (!n || typeof n !== 'number') {
      return;
    }

    if (
      stack.length < 1 ||
      (stackType == 'min' && n < current) ||
      (stackType == 'max' && n > current)
    ) {
      stack.push(n);
      current = n;
    }
  }

  pop() {
    return stack.pop();
  }

  most() {
    return current;
  }

  peek() {
    return stack[stack.length - 1];
  }

  swap() {
    stackType = stackType == 'min' ? 'max' : 'min';
  }
}
