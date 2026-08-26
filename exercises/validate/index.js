// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
//   10
//  5  20
// 0     15

// 10 5 20 0 15
// 0 5 X10X 15 20
//   10

function validate(node, min = -Infinity, max = Infinity) {
  const isNodeValid = node.data < max && node.data > min;

  let isLeftNodeValid = true;
  if (node.left) {
    isLeftNodeValid = validate(node.left, min, node.data);
  }

  let isRightNodeValid = true;
  if (node.right) {
    isRightNodeValid = validate(node.right, node.data, max);
  }

  return isNodeValid && isLeftNodeValid && isRightNodeValid;
}

module.exports = validate;
