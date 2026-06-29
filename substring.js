// Find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const seenChars = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    // If the character was seen and is within the current window
    if (seenChars.has(currentChar) && seenChars.get(currentChar) >= start) {
      // Jump the start pointer to the position right after the last occurrence
      start = seenChars.get(currentChar) + 1;
    }

    // Store or update the character's last seen index
    seenChars.set(currentChar, end);

    // Calculate the current window length and update the maximum
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring('abcabcbb')); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring('bbbbb')); // Output: 1 ("b")
console.log(lengthOfLongestSubstring('pwwkew')); // Output: 3 ("wke")
