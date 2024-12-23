// 62. Unique Paths
// Solved
// Medium
// Topics
// Companies
// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down


var uniquePaths = function(m, n) {
    
    let memo = [];

    for (let idx = 0; idx < m; idx++) {
        memo.push(Array(n).fill(0));
    }

    const helper = (m, n, memo) => {
        if (m === 0 || n === 0) return memo[m][n] = 1;

        if (memo[m][n]) return memo[m][n];

        return memo[m][n] = helper(m, n - 1, memo) + helper(m - 1, n, memo);
    }

    return helper(m - 1, n - 1, memo);
};



var uniquePaths = function(m, n) {
    
    let memo = [];

    for (let idx = 0; idx < m; idx++) {
        if (idx === 0) memo.push(Array(n).fill(1));
        else memo.push(Array(n).fill(0));
        memo[idx][0] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
        }
    }

    return memo[m - 1][n - 1];

};

var uniquePaths = function(m, n) {
    
    let prevRow = Array(n).fill(1);
    let curRow = Array(n).fill(0);
    curRow[0] = 1;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            curRow[j] = curRow[j - 1] + prevRow[j];
        }

        prevRow = curRow;
        curRow = Array(n).fill(0);
        curRow[0] = 1;
        //the above three lines can be written as[prevRow, curRow] = [curRow, prevRow]
    }

    return prevRow[n - 1];

};

var uniquePaths = function(m, n) {
    
    let memo = Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            memo[j] = memo[j] + memo[j - 1];
        }
    }

    return memo[n - 1];

};