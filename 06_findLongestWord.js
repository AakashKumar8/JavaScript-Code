function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

// Using for of loop
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}
// Do not modify the below lines
module.exports = { findLongestWord };