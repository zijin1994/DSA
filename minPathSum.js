var minPathSum = function(grid) {
    for (let i = 1; i < grid[0].length; i++) {
        grid[0][i] = grid[0][i] + grid[0][i - 1];
    }

    for (let j = 1; j < grid.length; j++) {
        grid[j][0] = grid[j - 1][0] + grid[j][0];
    }

    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    return grid[grid.length - 1][grid[0].length - 1];
};


var minPathSum = function(grid) {
    let memo = [];

    for (let idx = 0; idx < grid.length; idx++) {
        memo.push(Array(grid[0].length).fill(false));
    }


    let helper = (i, j) => {
        if (i === 0 && j === 0) return grid[i][j];
        if (memo[i][j] !== false) return memo[i][j];

        
        let result;

        if (i === 0) result = grid[i][j] + helper(i, j - 1);
        else if (j === 0) result = grid[i][j] + helper(i - 1, j);
        else result = grid[i][j] + Math.min(helper(i, j - 1), helper(i - 1, j));
        memo[i][j] = result;
        return result;
    };

    return helper(grid.length - 1, grid[0].length - 1);
};

var minPathSum = function(grid) {
    let memo = [];

    for (let idx = 0; idx < grid.length; idx++) {
        memo.push(Array(grid[0].length).fill(false));
    }


    let helper = (i, j) => {
        if (i < 0 || j < 0) return Infinity;
        if (i === 0 && j === 0) return grid[i][j];
        if (memo[i][j] !== false) return memo[i][j];

        
        let result;

        result = grid[i][j] + Math.min(helper(i, j - 1), helper(i - 1, j));
        memo[i][j] = result;
        return result;
    };

    return helper(grid.length - 1, grid[0].length - 1);
};