function quickSort(nums, left, right) {
   if (left < right) {
       const pivotIndex = partition(nums, left, right);
       quickSort(nums, left, pivotIndex - 1);
       quickSort(nums, pivotIndex + 1, right);
   }
}


function partition(nums, left, right) {
   const pivot = nums[right];
   let i = left - 1;


   for (let j = left; j < right; j++) {
       if (nums[j] <= pivot) {
           i++;
           [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap elements
       }
   }


   [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]]; // Swap the pivot to the correct position
   return i + 1;
}


function sortArray(nums) {
   quickSort(nums, 0, nums.length - 1);
   return nums;
}


// Example usage:
console.log(sortArray([5, 2, 3, 1])); // Output: [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // Output: [0, 0, 1, 1, 2, 5]