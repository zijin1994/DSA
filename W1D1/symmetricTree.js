var isSymmetric = function(root) {
    

    function helper(left, right) {
        if (!left || !right) return left === right;

        return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left);
    }

    return helper(root.left, root.right);
};