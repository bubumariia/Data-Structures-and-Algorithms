// var fib = function(n) {
//     if (n === 0) return 0;
//     if(n == 1) return 1
//     let firstPrev = 0
//     let secondPrev = 1
//     let output = 0 
    

//     for(let i = 1; i < n; i++){
//         let fib = firstPrev + secondPrev
//         firstPrev = secondPrev
//         secondPrev = fib
//         output = fib
//     }
//     return output
    
// };
// console.log(fib(4))


var fib = function(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n -2)
}

console.log(fib(4))