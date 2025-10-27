var transformArray = function(nums) {
    let output = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 1){
            output.push(1)
        }else{
          output.push(0)  
        }
    }
    return output.sort((a,b) => a-b)
   
};

console.log(transformArray([1,4,3,2]))