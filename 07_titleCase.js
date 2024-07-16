function titleCase(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}
// Using map method
function titleCase(sentence) {
    const words = sentence.toLowerCase().split(' ');

    const titleCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return titleCaseWords.join(' ');
}
// Do not modify the below lines
module.exports = { titleCase };