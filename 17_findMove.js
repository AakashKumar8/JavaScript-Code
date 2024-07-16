module.exports = { findMove };

function findMove(s) {
    // Write your code inside this function only.
    const result = [];

    for (let i = 0; i < s.length - 1; i++) {
        if (s.substring(i, i + 2) === "++") {
            const nextState = s.substring(0, i) + "--" + s.substring(i + 2);
            result.push(nextState);
        }
    }

    return result;
}