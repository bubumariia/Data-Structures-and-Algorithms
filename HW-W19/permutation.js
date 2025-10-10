var permute = function(nums) {
    let result = [];

    const dfs = (i, nums) => {
        if (i === nums.length) {
            result.push(nums.slice());
            return;
        }

        for (let j = i; j < nums.length; j++) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            dfs(i + 1, nums);

            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    };

    dfs(0, nums);
    return result;
};

console.log(permute([1,2,3]));
