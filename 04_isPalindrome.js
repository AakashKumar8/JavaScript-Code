function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.replace(/[^a-z0-9]/g, "");
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Do not modify the below lines
module.exports = { isPalindrome };