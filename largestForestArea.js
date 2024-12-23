// You are provided with an 'm x n' 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O'). Your task
//  is to find the largest contiguous forest area on the map. A 
// forest area consists of a group of tree cells ('T') connected
// 4-directionally (horizontally or vertically, but not diagonally).

// Write a function largestForestArea that accepts a nested
// array grid representing the 2D map. The function should
// return the size of the largest forest area, which is the
// number of contiguous 'T' cells in the largest forest.
// If there are no trees in the grid, return 0.

// Example:
// Input:
// [
//   ['O', 'T', 'O', 'O'],
//   ['T', 'T', 'O', 'T'],
//   ['O', 'O', 'O', 'T'],
//   ['O', 'O', 'T', 'T']
// ]
// Output: 4 (The largest forest area has 4 connected tree cells)
function forestArea(grid, i, j) {
    grid[i][j] = "O";
    let area = 1;

    let directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]

    for (let idx = 0; idx < directions.length; idx++) {
        let [newI, newJ] = [i + directions[idx][0], j + directions[idx][1]];
        
        if (newI >= 0 && 
            newI < grid.length && 
            newJ >= 0 && 
            newJ < grid[0].length && 
            grid[newI][newJ] === "T") {
            area += forestArea(grid, newI, newJ);
        }
    }

    return area;
    
}


function largestForestArea(grid) {
    // Implementation goes here
    let maxArea = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "T") {
                maxArea = Math.max(forestArea(grid, i, j), maxArea);
            }
        }
    }
    return maxArea;
}

// Test cases
const grid1 = [];
console.log(largestForestArea(grid1) === 0);

const grid2 = [
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
    ['O', 'O', 'O']
];
console.log(largestForestArea(grid2) === 0);

const grid3 = [
    ['T', 'T', 'O'],
    ['T', 'T', 'O'],
    ['O', 'O', 'O']
];
console.log(largestForestArea(grid3) === 4);

const grid4 = [
    ['O', 'O', 'T', 'T', 'O'],
    ['T', 'T', 'O', 'T', 'O'],
    ['T', 'T', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'T', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
];
console.log(largestForestArea(grid4) === 4);

const grid5 = [
    ['T', 'T', 'T'],
    ['T', 'O', 'T'],
    ['T', 'T', 'T']
];
console.log(largestForestArea(grid5) === 8);

const grid6 = [
    ['T', 'O', 'T', 'O', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
    ['T', 'O', 'T', 'O', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
    ['T', 'O', 'T', 'O', 'T']
];
console.log(largestForestArea(grid6) === 1);

const grid7 = [
    ['T', 'T', 'T'],
    ['T', 'T', 'T'],
    ['T', 'T', 'T']
];
console.log(largestForestArea(grid7) === 9);

const grid8 = [
    ['O', 'T', 'O', 'T', 'T'],
    ['O', 'T', 'O', 'O', 'O'],
    ['O', 'O', 'T', 'O', 'O'],
    ['O', 'O', 'T', 'T', 'T'],
    ['T', 'O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid8) === 7);

const grid9 = [
    ['T', 'O', 'T', 'T'],
    ['O', 'T', 'O', 'T'],
    ['T', 'T', 'O', 'O'],
    ['O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid9) === 6);

const grid10 = [
    ['O', 'T', 'O', 'O'],
    ['T', 'T', 'O', 'T'],
    ['O', 'O', 'O', 'T'],
    ['O', 'O', 'T', 'T']
];
console.log(largestForestArea(grid10) === 4);

const grid11 = [
    ['O', 'T', 'T', 'T', 'O'],
    ['T', 'T', 'O', 'T', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
    ['T', 'T', 'O', 'T', 'O'],
    ['T', 'T', 'O', 'T', 'T']
];
console.log(largestForestArea(grid11) === 7);

// All test cases should log true