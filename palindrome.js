function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false; // Mismatch found, not a palindrome
    }
    left++;
    right--;
  }

  return true;
}

// Test cases
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A man, a plan, a canal. Panama')); // true
console.log(isPalindrome('hello'));
