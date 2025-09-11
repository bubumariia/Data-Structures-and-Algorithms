var groupAnagrams = function(strs) {
  let hashMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");

    if (hashMap.has(key)) {
      hashMap.get(key).push(strs[i]);
    } else {
      hashMap.set(key, [strs[i]]);
    }
  }

  return Array.from(hashMap.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
