


var solve = function(board) {
    function dfs(board, i, j, currentMark, mark) {
        if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1 || board[i][j] !== currentMark) {
            return;
        }

        board[i][j] = mark;

        dfs(board, i - 1, j, currentMark, mark);
        dfs(board, i, j + 1, currentMark, mark);
        dfs(board, i + 1, j, currentMark, mark);
        dfs(board, i, j - 1, currentMark, mark);
    }

    function markUnSurrounded(currentMark, mark) {
        for (let i = 0; i < board[0].length; i++) {
            if (board[0][i] === currentMark) {
                dfs(board, 0, i, currentMark, mark);
            }
            if (board[board.length - 1][i] === currentMark) {
                dfs(board, board.length - 1, i, currentMark, mark);
            }
        }

        for (let i = 0; i < board.length; i++) {
            if (board[i][0] === currentMark) {
                dfs(board, i, 0, currentMark, mark);
            }
            if (board[board[0].length - 1][i] === currentMark) {
                dfs(board, board[0].length - 1, i, currentMark, mark);
            }
        }
    }

    markUnSurrounded("O", "*");
    console.log(board);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === "O") {
                dfs(board, i, j, "O", "X");
            }
        }
    }
    console.log(board);
    markUnSurrounded("*", "O");
    console.log(board);
};

console.log(solve([["X","O","X"],["O","X","O"],["X","O","X"]]));