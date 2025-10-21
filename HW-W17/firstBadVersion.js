
const isBadVersion = (version) => version >= 4;


var solution = function(isBadVersion) {
  return function(n) {
    let left = 0;
    let right = n;
    let output = -1

    while(right >= left){
        let middle = Math.floor((right + left) / 2)
        if(!isBadVersion(middle)){
            left = middle + 1
        }else{
            output = middle
            right = middle - 1
        }
    }
    return output
    
  };
};


const findFirstBad = solution(isBadVersion);

console.log(findFirstBad(5))
