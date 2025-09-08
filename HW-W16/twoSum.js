// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

var twoSum = function(nums, target){
    let hashMap = new Map()

    for(let i = 0; i < nums.length; i++){
        if(!hashMap.has(nums[i])){
            hashMap.set(nums[i],i)
        }
    }

    
    for(let j = 0; j < nums.length; j++){
        let diff = target - nums[j]
        if(hashMap.has(diff) && hashMap.get(diff) !== j){
            return [hashMap.get(diff), j]
        }

    }
    return []
}

console.log(twoSum([3,2,3],6))
console.log(twoSum([2,5,5,11], 10))