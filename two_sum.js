// Find two numbers in an array that add up to a specific target.

/**
 * Finds two numbers in an array that add up to a specific target.
 * @param {number[]} nums - Array of integers.
 * @param {number} target - Target sum.
 * @returns {number[]|null} - Indices of the two numbers, or null if no solution.
 */
function twoSum(nums, target) {
  // Input validation
  if (!Array.isArray(nums) || typeof target !== 'number') {
    throw new Error(
      'Invalid input: nums must be an array and target must be a number.',
    );
  }

  const map = new Map(); // Stores number -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in the map
    if (map.has(complement)) {
      return [map.get(complement), i]; // Return indices
    }

    // Store the current number with its index
    map.set(nums[i], i);
  }

  return null; // No solution found
}

// Example usage:
try {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);

  if (result) {
    console.log(`Indices: ${result[0]}, ${result[1]}`);
    console.log(`Numbers: ${nums[result[0]]}, ${nums[result[1]]}`);
  } else {
    console.log('No two numbers add up to the target.');
  }
} catch (error) {
  console.error(error.message);
}
