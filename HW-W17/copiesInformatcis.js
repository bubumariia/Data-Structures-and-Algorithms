var copies = function(N, x, y) {
    let fast = Math.min(x, y);
    let left = 0;
    let right = N * fast;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let copies = 1 + Math.floor((mid - fast) / x) + Math.floor((mid - fast) / y);
        if (copies >= N) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

console.log(copies(5, 1, 2)); 
console.log(copies(4, 1, 1)); 
