var pivotIndex = function(nums) {
    if (nums.length < 2) return -1
    let before = 0;
    let after = nums.reduce((a, c) => a + c) - before;

    // Scan through all the numbers in the array
    for (let i = 0; i < nums.length; i++) {
        after = after - nums[i];

        // Check if pivot
        if (before === after) {
            return i;
        }
        before = before + nums[i];
    }
    // If a pivot is not found then return -1
    return -1
};