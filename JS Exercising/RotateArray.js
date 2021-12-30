function rotate(nums, k) {
    let n = nums.length;
    if (n <= 1) return; // no need to rotate.
    k = k % n;
    if (k == 0) return;

    swap(nums, 0, n - 1);
    swap(nums, 0, k - 1);
    swap(nums, k, n - 1);

    return nums;
}

function swap(nums, l, r){
    while (l < r) {
        let t = nums[l];
        nums[l] = nums[r];
        nums[r] = t;
        l++;
        r--;
    }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));