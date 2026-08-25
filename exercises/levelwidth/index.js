// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let levels = [1];

  let currentLevel = 1;
  let levelData = root.children;

  while (levelData.length > 0) {
    levels[currentLevel] = levelData.length;

    currentLevel++;
    levelData = levelData.map((child) => child.children).flat();
  }

  return levels;
}

module.exports = levelWidth;
