module.exports = { signOfProduct };

function signOfProduct(nums) {
    // Write your code inside this function only.
    let negCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negCount++;
        } else if (nums[i] === 0) {
            return 0; // Product will be zero
        }
    }

    // Determine the sign based on negCount
    if (negCount % 2 === 0) {
        return 1; // Product is positive
    } else {
        return -1; // Product is negative
    }
}