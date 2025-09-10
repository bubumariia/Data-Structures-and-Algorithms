var topKFrequent = function(nums, k) {
    let output = []
    let hashMap = new Map()

    for(let i = 0; i < nums.length; i++){
        if(hashMap.has(nums[i])){
            hashMap.set(nums[i], hashMap.get(nums[i])+ 1)
        }else{
            hashMap.set(nums[i], 1)
        }
    }
   
    let keysOfHashmap = [...hashMap.keys()].sort((a, b) => hashMap.get(b) - hashMap.get(a));

    for (let j = 0; j < k; j++) {
        output.push(keysOfHashmap[j]);
    }
    return output
};

console.log(topKFrequent([1,1,1,2,2,3], 2))