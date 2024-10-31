// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function anagrams(stringA, stringB) {
  const strACharMap = createCharMap(stringA);
  const strBCharMap = createCharMap(stringB);

  if (Object.keys(strACharMap).length !== Object.keys(strBCharMap).length) {
    return false;
  }

  const differenceInStrB = [];
  Object.keys(strACharMap).forEach((char) => {
    if (!strBCharMap[char]) {
      differenceInStrB.push(char);
    }
  });

  const differenceInStrA = [];
  Object.keys(strBCharMap).forEach((char) => {
    if (!strACharMap[char]) {
      differenceInStrA.push(char);
    }
  });

  if (differenceInStrA.length || differenceInStrB.length) {
    return false;
  }

  return true;
}

const createCharMap = (str) => {
  const charMap = {};

  for (const char of str) {
    if (!alphabet.includes(char)) {
      continue;
    }
    const lowerChar = char.toLowerCase();
    if (charMap[lowerChar]) {
      charMap[lowerChar]++;
    } else {
      charMap[lowerChar] = 1;
    }
  }

  return charMap;
};

module.exports = anagrams;
