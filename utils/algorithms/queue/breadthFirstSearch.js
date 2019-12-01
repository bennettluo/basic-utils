// O(n^2)

function breadthFirstSearch(value, node) {
  let queue = [];

  queue.unshift(node);

  while (queue.length) {
    // O(n)
    const curNode = queue.pop();
    if (curNode.value == value) {
      return curNode;
    }

    const len = (curNode.children || []).length;
    for (let i = 0; i < len; i++) {
      // O(i)
      queue.unshift(curNode.children[i]);
    }
  }

  return null;
}
