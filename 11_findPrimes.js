module.exports = { findPrimes };

function findPrimes(n) {
    // Write your code inside this function only.
    //  If n is less than 2, return an empty array since there are no primes less than 2
    if (n < 2) {
        return [];
    }
    
    // Initialize an array to store prime numbers
    const primes = [];
    
    // Iterate through each number from 2 to n
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        
        // Check if num is divisible by any number from 2 to its square root
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break; // Exit the loop if num is not prime
            }
        }
        
        // If num is prime, push it to the primes array
        if (isPrime) {
            primes.push(num);
        }
    }
    
    return primes;
}


