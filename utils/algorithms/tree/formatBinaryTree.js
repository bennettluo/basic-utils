const treeNodes = {
  value: 50,
  left: {
    value: 1,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  },
  right: {
    value: 2,
    right: {
      value: 8,
      left: {
        value: 100,
        right: {
          value: 98
        }
      },
      right: {
        value: 40
      }
    }
  }
};

const recursion = (arr, currentTreeNodes) => {
  const arrItems = arr.reduce(
    (acc, cur) => acc.concat(cur.left || []).concat(cur.right || []),
    []
  );
  return arrItems.length > 0
    ? recursion(
        arrItems,
        currentTreeNodes.concat({
          data: arrItems.map(item => item.value),
          level: currentTreeNodes.length
        })
      )
    : currentTreeNodes;
};

const binaryTreeNodes = root =>
  recursion([root], [{ data: root.value ? [root.value] : [], level: 0 }]);

const result = binaryTreeNodes(treeNodes);

console.log(result);
