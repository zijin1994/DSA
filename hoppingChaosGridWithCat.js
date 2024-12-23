// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
    ["", "C", ""],
    ["", "", ""],
  ];
  
  // There is only one distinct path Chaos can take:
  // 1. Down -> Right -> Right
  
  function chaosInTheGridWithCats(grid) {
    // implementation
    let foundCat = false;
    for (let i = 0; i < grid[0].length; i++) {
        if (grid[0][i] ==="C") {
            foundCat = true;
        }

        if (foundCat) grid[0][i] = 0;
        else grid[0][i] = 1;
    }

    foundCat = false;
    for (let j = 0; j < grid.length; j++) {
        if (grid[j][0] === "C") {
            foundCat = true;
        }

        if (foundCat) grid[j][0] = 0;
        else grid[j][0] = 1;
    }

    for (let j = 1; j < grid.length; j++) {
        for (let i = 1; i < grid[j].length; i++) {
            if (grid[j][i] === "C") grid[j][i] = 0; 
            else grid[j][i] = grid[j - 1][i] + grid[j][i - 1];
        }
    }
    
    return grid[grid.length - 1][grid[0].length - 1];
  }
  
  // Test Cases:
  
  const grid1 = [
    ["", "C"],
    ["", ""],
  ];
  const grid2 = [["", "C"]];
  const grid3 = [
    ["", "", ""],
    ["", "C", ""],
    ["", "", ""],
  ];
  const grid4 = [
    ["", "", "", "", "C"],
    ["", "C", "", "", ""],
    ["", "", "", "C", ""],
  ];
  const grid5 = [
    ["", "", "", "", "C", ""],
    ["", "C", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "C", "", ""],
    ["", "C", "", "", "", ""],
    ["", "", "", "", "", ""],
  ];
  
  console.log(chaosInTheGridWithCats(grid1) === 1);
  console.log(chaosInTheGridWithCats(grid2) === 0);
  console.log(chaosInTheGridWithCats(grid3) === 2);
  console.log(chaosInTheGridWithCats(grid4) === 2);
  console.log(chaosInTheGridWithCats(grid5) === 43);