var compress = function(chars) {
    let counter = 1
    let currentIndex = 0
    let pointer = 0

    for(let i = 1; i <= chars.length; i++){
        if(i < chars.length && chars[pointer] === chars[i]){
            counter++
            
        }else {
            chars[currentIndex] = chars[pointer]
            currentIndex++
                
           if(counter > 1){
            let counterString = counter.toString()
            for(let j = 0; j < counterString.length; j++){
                chars[currentIndex] = counterString[j]
                currentIndex++
                
            }

           }
           counter = 1
           pointer = i
           
        }
        
        
    }
    
    return chars.slice(0, currentIndex);
    
};

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
