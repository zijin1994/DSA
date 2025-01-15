var productExceptSelf = function(nums) {
    let output = [];
    // 24 = 1 * 2 * 3 * 4 = 1 * (2 * 3 * 4)
    // 12 = 1 * 3 * 4 = 1 * (3 * 4)
    for (let idx = 0; idx < nums.length; idx++) {
         if (idx === 0) output.push(1);
         else {
             output.push(nums[idx - 1] * output[output.length - 1]);
         }
    }
 
     let totalRight = 1;
     for (let idx = nums.length - 1; idx >= 0; idx--) {
         if (idx === nums.length - 1) continue;
         else {
             totalRight = totalRight * nums[idx + 1];
             output[idx] *= totalRight;
         }
 
     }
 
     return output;
 };