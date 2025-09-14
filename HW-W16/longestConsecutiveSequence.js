// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0
//     let hashMap = new Map()

//     for(let i = 0; i < nums.length; i++){
//         if(!hashMap.has(nums[i])){
//             hashMap.set(nums[i], nums[i])
//         }
//     }
//     let sortedArray = [...hashMap.values()].sort((a, b) => a - b);
//     let count = 1
//     let countList = []

//     for(let j = 1; j < sortedArray.length; j++){
//         if(sortedArray[j] === sortedArray[count-1]+1){
//             count++
//         }else{
//             countList.push(count)
//             count = 1
//         }
//     }
//     countList.push(count)


//     return Math.max(...countList)
// };

// console.log(longestConsecutive([100,2]))

var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;

  let numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let streak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        streak++;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
};
