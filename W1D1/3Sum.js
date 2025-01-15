var threeSum = function(nums) {
    let res = [];
    let sortedNums = nums.slice().sort((a, b) => a - b);
 
    for (let idx = 0; idx < sortedNums.length; idx++) {
         let curr = sortedNums[idx];
         if (idx > 0 && curr === sortedNums[idx - 1]) continue;
 
         let remain = 0 - curr;
 
         let start = idx + 1;
         let end = sortedNums.length - 1;
 
         while (start < end) {
             let twoSum = sortedNums[start] + sortedNums[end];
             if (twoSum < remain) {
                 start++;
             } else if (twoSum > remain) {
                 end--;
             } else {
                 res.push([curr, sortedNums[start], sortedNums[end]]);
                 while (start < end && sortedNums[start] === sortedNums[start + 1]) start++;
                 while (start < end && sortedNums[end] === sortedNums[end - 1]) end--;
                 start++;
                 end--;
             }
         }
    }
 
    return res; 
 };