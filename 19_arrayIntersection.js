module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
    // Convert arrays to sets to handle duplicates
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    
    // Initialize array to store intersection elements
    const intersection = [];
    
    // Iterate through set1
    set1.forEach(element => {
        // Check if element exists in set2
        if (set2.has(element)) {
            intersection.push(element);
        }
    });
    
    return intersection;
}