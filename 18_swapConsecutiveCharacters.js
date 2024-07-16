module.exports = { swapConsecutiveCharacters };

function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
    const result = [];

    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            // Swap consecutive characters
            result.push(str[i + 1]);
            result.push(str[i]);
        } else {
            // Append the last character (if string length is odd)
            result.push(str[i]);
        }
    }

    return result.join('');
}