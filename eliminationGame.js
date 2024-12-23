//jim
var lastRemaining = function(n) {
    //3375 / 3377 testcases passed
    let arr = [];
    for (let idx = 0; idx < n; idx++) {
        arr.push(idx + 1);
    }

    const helper = (arr, fromFront) => {
        if (arr.length === 1) return arr[0];

        return helper(arr.filter((_, idx) => {
            return (fromFront) ? 
                (idx % 2 === 1) :
                (arr.length - 1 - idx) % 2 === 1;
        }), !fromFront);
    }

    return helper(arr, true);
};

//Mason
function lastRemaining(num) {
    let nums = Array.from( {length: num}, (_, i) => i += 1 )
    while (nums.length > 1) {
      nums = nums.filter((_, idx) => {
        return idx % 2 === 1
      })
  
      if (nums.length === 1) break
  
      if (nums.length % 2 === 0) {
        nums = nums.filter((_, idx) => idx % 2 === 0)
      } else {
        nums = nums.filter((_, idx) => idx % 2 === 1)
      }
    }
    
    return nums[0]
  }


//Optimal solution
var lastRemaining = function(n) {
    const helper = (n, front) => {
        if (n === 1) return 1;

        let halfed = Math.floor(n / 2);
        //left -> right:
        if (front) return 2 * helper(halfed, !front);
        //[1, 2, 3, 4, 5, 6] => [2, 4, 6] === right => left of [1, 2, 3] * 2;
        else {
            //right -> left;
            //[1, 2, 3, 4, 5, 6, 7] => [2, 4, 6]
            if (n % 2 === 1) return 2 * helper(halfed, !front);
            // [2, 4, 6] === left => right of [1, 2, 3] * 2; 

            //[1, 2, 3, 4, 5, 6] => [1, 3, 5]
            else return 2 * helper(halfed, !front) - 1;
            // [1, 3, 5] ==== left => right of [1, 2, 3] * 2 - 1;
        }
    }

    return helper(n, true);
}