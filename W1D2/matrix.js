var spiralOrder = function(matrix) {
    let i = matrix.length;
    let j = matrix[0].length;
    let result = [];
    let cycle = 0;
    
    while (result.length < i * j) {
        for (let col = 0 + cycle; col < j - cycle; col++) {
            result.push(matrix[0 + cycle][col]);
        }
        if (result.length  === i * j) break;
        for (let row = cycle + 1; row < i - cycle; row++) {
            result.push(matrix[row][j - 1 - cycle]);
        }
        if (result.length  === i * j) break;
        for (let col = j - 2 - cycle; col >= 0 + cycle; col--) {
            result.push(matrix[i - 1 - cycle][col]);
        }
        if (result.length  === i * j) break;
        for (let row = i - 2 - cycle; row >= 1 + cycle; row--) {
            result.push(matrix[row][0 + cycle]);
        }

        cycle++;
    }
    
    return result;
};
     


function spiralOrder(matrix) {
    matrix = JSON.parse(JSON.stringify(matrix));
  
    let spiral = [];
  
    while (matrix.length > 0) {
      if (matrix[0][0] === undefined) break;
  
      // 1. add top row from left to right
      spiral.push(...matrix.shift());
  
      // 2. add last column digits
      for (let row of matrix) {
        let lastDigit = row.pop();
        spiral.push(lastDigit);
      }
  
      // 3. to avoid backwards considerations
      //    reverse the matrix and each row, and repeat loop
      matrix.reverse();
      matrix.map(row => row.reverse());
    }
  
  
    return spiral;
  }

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));