var countPairs = function(nums, target) {
    let output = 0
    let current = 1
    let n = nums.length 
    for(let i = 0; i < n; i++ ){
        for(let j = current; j < n; j++){
            if(nums[i] + nums[j] < target){
                
                output++
                
            }
        }
        current ++
    }
    return output
};

console.log(countPairs([-6,2,5,-2,-7,-1,3], -2))