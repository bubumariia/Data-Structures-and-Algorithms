var moveZeroes = function(nums) {
  if(nums.length == 1) return nums
  let temp = 0
  
  for( let i = 0; i < nums.length; i++){
   if(nums[i] != 0){
     nums[temp] = nums[i]
     temp++
   }
 }
  for(let j = temp; j < nums.length; j++ ){
    nums[j] = 0
  }
   return nums
};

console.log(moveZeroes([0,1,0,3,12]))