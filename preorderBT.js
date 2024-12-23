// Given the root node of a binary tree, implement a
// function `preorderTraversal` that returns an
// array containing the values of the nodes visited in
// a preorder traversal.

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

   function preorderTraversal(tree) {
        let arr = [];

        function helper(node) {
            if (!node) return;

            arr.push(node.val);
            helper(node.left);
            helper(node.right);
        }

        helper(tree);

        return arr;
   }

   function preorderTraversal(tree) {
        let arr = [tree.val];

        let stack = [tree];

        let currentNode = tree;

        while(stack.length > 0){
            while(currentNode.left) {
                arr.push(currentNode.left.val);
                stack.push(currentNode.left);
                currentNode = currentNode.left;
            }



            currentNode = stack.pop();
            if (currentNode.right) {
                arr.push(currentNode.right.val);
                stack.push(currentNode.right);
                currentNode = currentNode.right;
            }


        }

        return arr;

   }

   function preorderTraversal(tree) {
        let arr = [];

        let stack = [tree];

        while (stack.length > 0) {
            let currentNode = stack.pop();
            arr.push(currentNode.val);

            if (currentNode.right) stack.push(currentNode.right);
            if (currentNode.left) stack.push(currentNode.left);
        }

        return arr;
   }

   function preorderTraversal(tree) {
        let arr = [];
        let stack = [];
        let currentNode = tree;

        while (currentNode || stack.length > 0) {
            while(currentNode) {
                arr.push(currentNode.val);
                stack.push(currentNode);
                currentNode = currentNode.left;
            }

            currentNode = stack.pop();
            currentNode = currentNode.right;
        }

        return arr;
   }
  
  // Test Cases:
  
  const tree1 = buildTree([1, null, 2, 3]);
  console.log(preorderTraversal(tree1)); // Output: [1, 2, 3]
  
  const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
  console.log(preorderTraversal(tree2)); // Output: [1, 2, 3, 4, 5]
  
  const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
  console.log(preorderTraversal(tree3)); // Output: [5, 3, 2, 1]
  
  const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
  console.log(preorderTraversal(tree4)); // Output: [10, 5, 6, 15, 12, 11, 21]