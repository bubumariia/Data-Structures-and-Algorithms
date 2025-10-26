    var sortPeople = function(names, heights) {
        let hashMap = new Map()

        for(let i = 0; i < names.length; i++){
            hashMap.set(heights[i], names[i] )
        }

        let sortedHeights = [...heights].sort((a, b) => b - a)

        let output = []

        for(let j = 0; j < sortedHeights.length; j++ ){
            output.push(hashMap.get(sortedHeights[j]))
        }

        return output
    };

console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))