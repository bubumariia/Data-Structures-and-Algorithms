var finalValueAfterOperations = function(operations) {
    let counter = 0

    for(let i = 0; i < operations.length; i++){
        if(operations[i][1] === "+"){
            counter ++
        }else if(operations[i][1] === "-"){
            counter --
        }
    }
    return counter
};

console.log(finalValueAfterOperations(["--X","X++","X++"]))