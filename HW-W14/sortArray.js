var sortArrayByParityII = function(nums) {
    let output = []
    let even  = 0
    let odd = 1
    

    for(let i = 0; i < nums.length; i++){
        if(nums[i]%2 == 0){
           output[even] = nums[i] 
           even+=2

        }else{
            output[odd] = nums[i]
            odd+=2
        }
        
    }
    return output
};

console.log(sortArrayByParityII([4,2,5,7]))