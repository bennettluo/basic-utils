// O(n^2)

function depthFirstSearch(value, node) {
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
