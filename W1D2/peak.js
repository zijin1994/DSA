//yeeeeee.
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let middle = Math.floor((l + r) / 2);
        let [left, mid, right] = [nums[middle - 1] || -Infinity, nums[middle], nums[middle + 1] || -Infinity];

        if (mid > left && mid > right) return middle;
        else if (right > mid) l = middle + 1;
        else if (left > mid) r = middle - 1;
    }

    if (nums[l] > nums[r]) return l;
    else return r;
};