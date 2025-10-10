function findGCD(a, b) {
    if (a === 0)
        return b;
    return findGCD(b % a, a);
}

console.log(findGCD(12,15))