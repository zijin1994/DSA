var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = Math.floor((l + r) / 2);

        let [first, second, third] = [nums[l], nums[m], nums[r]];
        if (first < third) return first;
        else if (second > third) l = m + 1;
        else if (first > second) r = m;
    }

    return nums[l];
};