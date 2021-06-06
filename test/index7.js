// 随机构建一棵二叉树

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function findRandomLeftNode(tree) {
  if (!tree) {
    return null;
  }
  while (true) {
    if (!tree.left || !tree.right) {
      return tree;
    }
    tree = Math.floor(Math.random() * 10) % 2 == 0 ? tree.left : tree.right;
  }
}

function createBTree(numbers) {
  let tree = null;

  for (let i in numbers) {
    let leftNode = findRandomLeftNode(tree);
    if (leftNode == null) {
      tree = new TreeNode(numbers[i]);
      continue;
    }
    if (!leftNode.left) {
      leftNode.left = new TreeNode(numbers[i]);
    } else if (!leftNode.right) {
      leftNode.right = new TreeNode(numbers[i]);
    }
  }
  return tree;
}
const testRoot = createBTree([1, 2, 3, 4, 5]);

console.log(testRoot);

function it(root) {
  if (root == null) {
    return;
  }
  console.log(root.value);
  it(root.left);
  it(root.right);
}

// it(testRoot);

const hasPathSum = function (root, sum) {
  if (root == null) {
    return;
  }
  const nodeQue = [];
  const valQue = [];
  nodeQue.push(root);
  valQue.push(root.value);
  while (nodeQue.length) {
    let curNode = nodeQue.shift();
    let curVal = valQue.shift();
    console.log(curNode.value);
    if (curNode.left == null && curNode.right == null) {
      // valQue.push(valQue.)
      if (curVal == sum) {
        return true;
      }
    }
    if (curNode.left) {
      nodeQue.push(curNode.left);
      valQue.push(curNode.left.value + curVal);
    }
    if (curNode.right) {
      nodeQue.push(curNode.right);
      valQue.push(curNode.right.value + curVal);
    }
  }
  return false;
};

const hasPathSum2 = function (root, sum) {
  if (root == null) {
    return false;
  }
  if (root.left == null && root.right == null) {
    return sum == root.value;
  }
  return (
    hasPathSum2(root.left, sum - root.value) ||
    hasPathSum2(root.right, sum - root.value)
  );
};

console.log(hasPathSum(testRoot, 3));
console.log(hasPathSum2(testRoot, 3));
