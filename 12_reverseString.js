module.exports = { reverseString };

function reverseString(str) {
    // Write your code inside this function only.
    // Convert string to array of characters
    const arr = str.split('');

    // Reverse the array of characters
    arr.reverse();

    // Convert array back to string
    const reversedStr = arr.join('');

    // Return the reversed string
    return reversedStr;
}