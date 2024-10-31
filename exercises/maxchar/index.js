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

  const mostOccuredNumber = Math.max(...Object.values(charMap));

  let mostOccuredChars = '';

  for (const [char, number] of Object.entries(charMap)) {
    if (number === mostOccuredNumber) {
      mostOccuredChars += mostOccuredChars.length ? ` ${char}` : char;
    }
  }

  return mostOccuredChars;
}

module.exports = maxChar;
