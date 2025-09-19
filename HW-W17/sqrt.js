var mySqrt = function(x) {
    let start = 0
    let end = x
    let output = -1

    while(start <= end){
        let middle  = Math.floor((start + end) / 2)

        if(middle * middle === x){
            return middle
        }else if(middle * middle > x){
            end = middle - 1
        }else{
            start = middle + 1
            output = middle
        }
    }
    return output
    
};

console.log(mySqrt(8))