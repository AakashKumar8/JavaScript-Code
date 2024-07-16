function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return parseFloat(totalAmount.toFixed(2));
}

// Do not modify the below lines
module.exports = { calculateTip };