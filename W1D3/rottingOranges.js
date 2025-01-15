var orangesRotting = function(grid) {
    let queue = [];
    let totalFresh = 0;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i,j]);
            } else if (grid[i][j] === 1) {
                totalFresh += 1;
            }
        }
    }

    if (totalFresh === 0) return 0;
    let min = 0;

    while (queue.length > 0) {
        let levelLen = queue.length;
        for (let idx = 0; idx < levelLen; idx++) {
            let currentRotten = queue.shift();
            for (let direction of directions) {
                let [x, y] = direction;
                let [newX, newY] = [currentRotten[0] + x, currentRotten[1] + y];
                if (newX >= 0 && 
                    newX < grid.length && 
                    newY >= 0 && 
                    newY < grid[0].length && 
                    grid[newX][newY] === 1) {

                    grid[newX][newY] = 2;
                    totalFresh--;
                    queue.push([newX, newY]);
                }

            }
        }

        if (queue.length > 0) min++;
        if (totalFresh === 0) return min;
    }

    if (totalFresh === 0) return min;
    else return -1;
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));