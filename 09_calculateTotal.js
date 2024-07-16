function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

//the code using reduce() method.
function calculateTotal(cart) {
    const total = cart.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
    }, 0);

    return total;
}

// Do not modify the below lines
module.exports = { calculateTotal };