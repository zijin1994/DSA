// Given the root node of a binary tree, implement a
// function `postorderTraversal` that returns an
// array containing the values of the nodes visited in
// a postorder traversal.

class Node {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Helper function for test cases
  function buildTree(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    const nodes = [];
  
    const val = arr.shift();
    const root = new Node(val);
    nodes.push(root);
  
    while (arr.length > 0) {
      const curr = nodes.shift();
  
      const leftVal = arr.shift();
      if (leftVal !== null) {
        curr.left = new Node(leftVal);
        nodes.push(curr.left);
      }
  
      if (arr.length > 0) {
        const rightVal = arr.shift();
        if (rightVal !== null) {
          curr.right = new Node(rightVal);
          nodes.push(curr.right);
        }
      }
    }
  
    return root;
  }

  function postorderTraversal(tree) {
    let arr = [];

    function helper(currentNode) {
        if (!currentNode) return;

        helper(currentNode.left);
        helper(currentNode.right);
        arr.push(currentNode.val);
    }

    helper(tree);
    return arr;
  }

  //inorder NLR
  //postorder LRN => reverse of NRL, so reverse of inorder but visting right first.
  function postorderTraversal(tree) {
    let arr = [];
    let stack = [];

    let currentNode = tree;

    while(currentNode || stack.length > 0) {
        while (currentNode) {
            arr.unshift(currentNode.val);
            stack.push(currentNode);
            currentNode = currentNode.right;
        }

        currentNode = stack.pop();
        currentNode = currentNode.left;
    }

    return arr;
  }


  function postorderTraversal(tree) {
    let arr = [];
    let stack = [tree];

    while (stack.length > 0) {
      let currentNode = stack.pop();
      arr.unshift(currentNode.val);

      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
    }

    return arr;
  }
  
  // Test cases
  const tree1 = buildTree([1, null, 2, 3]);
  console.log(postorderTraversal(tree1)); // Output: [3, 2, 1]
  
  const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
  console.log(postorderTraversal(tree2)); // Output: [2, 5, 4, 3, 1]
  
  const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
  console.log(postorderTraversal(tree3)); // Output: [1, 2, 3, 5]
  
  const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
  console.log(postorderTraversal(tree4)); // Output: [6, 5, 11, 12, 21, 15, 10]