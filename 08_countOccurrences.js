function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

// code without using any loop, and try to implement inbuilt string methods.
function countOccurrences(str, char) {
    const count = str.split(char).length - 1;
    return count;
}
// Do not modify the below lines
module.exports = { countOccurrences };