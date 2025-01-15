var longestCommonSubsequence = function(text1, text2) {
    let memo = [];

    for (let i = 0; i < text1.length; i++) {
        memo.push(Array(text2.length).fill(false));
    }
    function helper(i, j) {
        if (i < 0 || j < 0) return 0;


        if (memo[i][j] !== false) return memo[i][j];
        let maxSub = 0;
        if (text1[i] === text2[j]) {
            maxSub = 1 + helper(i - 1, j - 1);
        } else {
            maxSub = Math.max(helper(i - 1, j), helper(i, j - 1));
        }

        memo[i][j] = maxSub;
        return maxSub;
    }

    return helper(text1.length - 1, text2.length - 1);
};