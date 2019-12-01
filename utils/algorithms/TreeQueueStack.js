class TreeQueueStack {
  constructor() {}

  binarySearch(arr, max, min, key) {
    // O(logn)/O(1)
    if (max > min) {
      return -1;
    }

    const middle = parseInt((max + min) / 2);

    // n = 2^k
    if (key == middle) {
      return arr[middle];
    } else if (key > middle) {
      return this.binarySearch(arr, max, middle + 1, key);
    } else if (key < middle) {
      return this.binarySearch(arr, middle - 1, min, key);
    }
  }

  breadthFirstSearch(value, node) {
    // O(n^2)
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

  depthFirstSearch(value, node) {
    // O(n^2)
    if (node.value == value) {
      return node;
    }

    const len = node.children.length;

    for (let i = 0; i < len; i++) {
      // O(i)
      const matchedNode = this.depthFirstSearch(value, node.children[i]); // O(n)
      if (matchedNode) {
        return matchedNode;
      }
    }

    return null;
  }
}
