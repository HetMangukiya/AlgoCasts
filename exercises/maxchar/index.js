// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  const maxChar = { char: '', num: 0 };

  for (const [char, num] of Object.entries(charMap)) {
    if (num > maxChar.num) {
      maxChar.char = char;
      maxChar.num = num;
    }
  }

  return maxChar.char;
}

module.exports = maxChar;
