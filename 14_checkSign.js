module.exports = { checkSign };

function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
    // Determine signs of each number
    const sign1 = num1 > 0 ? '+' : '-';
    const sign2 = num2 > 0 ? '+' : '-';
    const sign3 = num3 > 0 ? '+' : '-';

    // Determine the combination of signs
    if (sign1 === '+' && sign2 === '+' && sign3 === '+') {
        return "+++";
    } else if ((sign1 === '+' && sign2 === '+' && sign3 === '-') ||
               (sign1 === '+' && sign2 === '-' && sign3 === '+') ||
               (sign1 === '-' && sign2 === '+' && sign3 === '+')) {
        return "++-";
    } else if ((sign1 === '+' && sign2 === '-' && sign3 === '-') ||
               (sign1 === '-' && sign2 === '+' && sign3 === '-') ||
               (sign1 === '-' && sign2 === '-' && sign3 === '+')) {
        return "+--";
    } else if (sign1 === '-' && sign2 === '-' && sign3 === '-') {
        return "---";
    }
}