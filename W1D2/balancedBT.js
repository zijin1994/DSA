var isBalanced = function(root) {
    if (!root) return true;

    function treeHeight(node) {
        if (!node) return 0;
        return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
    }

    return Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};