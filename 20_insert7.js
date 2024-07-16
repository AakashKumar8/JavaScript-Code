module.exports = { insert7 };

function insert7(inputString) {
    // Write your code inside this function only.
    const result = [];
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        const ch = inputString[i];
        
        if (ch !== ' ') {
            count++;
            result.push(ch);
            
            if (count % 6 === 0) {
                result.push('7');
            }
        } else {
            result.push(ch);
        }
    }

    return result.join('');
}
