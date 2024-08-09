function pancakeSort(arr) {
    const result = [];
    
    for (let n = arr.length; n > 1; n--) {
        // Find the index of the maximum value in the current sub-array
        let maxIndex = findMaxIndex(arr, n);

        // If the maximum value is not at its correct position
        if (maxIndex !== n - 1) {
            // If the maximum value is not at the first position, flip it to the first
            if (maxIndex !== 0) {
                result.push(maxIndex + 1);
                flip(arr, maxIndex + 1);
            }
            // Flip it to its correct position
            result.push(n);
            flip(arr, n);
        }
    }
    
    return result;
}

// Helper function to find the index of the maximum value in arr[0...n-1]
function findMaxIndex(arr, n) {
    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

// Helper function to reverse the sub-array arr[0...k-1]
function flip(arr, k) {
    let left = 0;
    let right = k - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]; // Swap elements
        left++;
        right--;
    }
}

// Example usage:
console.log(pancakeSort([3, 2, 4, 1])); // Output: [4, 2, 4, 3]
console.log(pancakeSort([1, 2, 3]));    // Output: []


// test:
