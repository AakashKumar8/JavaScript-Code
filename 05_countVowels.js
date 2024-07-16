function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

// Do not modify the below lines
module.exports = { isPalindrome };