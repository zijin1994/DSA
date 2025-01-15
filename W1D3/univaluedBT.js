var isUnivalTree = function(root) {
    let prev = null;
    let isUni = true;
    function helper(root) {
        if (!root) return;

        if (prev !== null && prev.val !== root.val) isUni = false;
        prev = root;
        helper(root.left);
        helper(root.right);
    }

    helper(root);

    return isUni;
};