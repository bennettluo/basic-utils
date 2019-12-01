let stack = [];
let activeStack = [];
let stackType = 'min';

class ActiveStack {
  constructor() {}

  push(num) {
    if (!num || typeof num !== 'number') {
      return;
    }

    const peekOfActiveStack = this.peek(activeStack);
    const matchedActiveStackRule =
      activeStack.length == 0 ||
      (activeStack.length &&
        (stackType == 'min'
          ? num < peekOfActiveStack
          : num > peekOfActiveStack));
    if (matchedActiveStackRule) {
      activeStack.push(num);
    }
    stack.push(num);
  }

  pop() {
    const cur = stack.pop();
    if (cur == this.peek(activeStack)) {
      activeStack.pop();
    }
  }

  getStackTop() {
    return this.peek(stack);
  }

  getActiveStackTop() {
    return this.peek(activeStack);
  }

  peek(stack) {
    if (!Array.isArray(stack)) {
      throw new Error('Stack is invalid.');
    }
    return stack.length ? stack[stack.length - 1] : null;
  }
}

const stackInstance = new ActiveStack();

stackInstance.push(20);
stackInstance.push(10);
stackInstance.push('ignored');
stackInstance.push(30);
stackInstance.push(5);
stackInstance.push(999);

stackInstance.pop();
stackInstance.pop();

console.log(stackInstance.getActiveStackTop());
