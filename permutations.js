// Create a function `permutations` that takes an array of unique integers, `nums`, and
// returns all possible arrangements (permutations) of these numbers.

// The input array will contain at most 8 numbers.

// Example:

  // Input: [1,2,3]
  // Output: [
  //          [1, 2, 3],[1, 3, 2],[2, 1, 3],
  //          [2, 3, 1], [3, 1, 2], [3, 2, 1]
  //                                          ]
  
function permutations(input) {
    let result = [];

    function backTrack(input, currentEles, result) {
        if (input.length === 0) {
            result.push([...currentEles]);
            return;
        }

        for (let num of input) {
            let filteredInput = input.filter(n => n !== num);
            currentEles.push(num);
            backTrack(filteredInput, currentEles, result);
            currentEles.pop(num);
            
        }
    }

    backTrack(input, [], result);
    return result;
}

function permutations(input) {
    let result = [];

    function backTrack(input, currentEles, result) {
        if (currentEles.size === input.length) {
            result.push([...currentEles]);
            return;
        }

        for (let num of input) {
            if (!currentEles.has(num)) {
                currentEles.add(num);
                backTrack(input, currentEles, result);
                currentEles.delete(num);
            }        
        }
    }

    backTrack(input, new Set(), result);
    return result;
}

  function testPermutations(input, expectedLength) {
    const result = permutations(input);
    if (result.length !== expectedLength) return false;
  
    const stringifiedPerms = result.map(JSON.stringify);
    const uniquePerms = new Set(stringifiedPerms);
    return uniquePerms.size === expectedLength;
  }
  
  // Test Cases:
  
  console.log(testPermutations([1,2,3], 6));
  console.log(testPermutations([0,1], 2));
  console.log(testPermutations([1], 1));
  console.log(testPermutations([1,2,3,4], 24));
  console.log(testPermutations([1,2,3,4,5], 120));
  console.log(testPermutations([1,2,3,4,5,6], 720));
  console.log(testPermutations([1,2,3,4,5,6,7], 5040));
  console.log(testPermutations([1,2,3,4,5,6,7,8], 40320));
  console.log(testPermutations([0,1,2,3,4,5,6,7,8,9], 3628800));
  
  // Note: The order of permutations in the output doesn't matter,
  // as long as all permutations are present.
  
  // Don't run the last case for the naive-branch solution.
  // If you do and your machine seems "stuck" press `CTRL+Z`