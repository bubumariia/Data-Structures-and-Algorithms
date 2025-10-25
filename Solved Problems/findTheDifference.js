var findTheDifference = function(s, t) {
    let hashTable = new Map()
    

    for(let i = 0; i < s.length; i++){
        if(!hashTable.has(s[i])){
            hashTable.set(s[i],1)
        }else{
            hashTable.set(s[i], hashTable.get(s[i])+1)
        }
    }

    for(let j = 0; j < t.length; j++){
        if(hashTable.has(t[j]) && hashTable.get(t[j]) > 0){
            hashTable.set(t[j], hashTable.get(t[j]) -1)
        }else{
            return t[j]
        }
    }
    
};


console.log(findTheDifference("aabcd","abcde"))