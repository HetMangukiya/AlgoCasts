// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function generateCharMap(str) {
//   const charMap = {};

//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const cleanStringA = stringA.toLowerCase().replace(/[^\w]/g, '');
//   const cleanStringB = stringB.toLowerCase().replace(/[^\w]/g, '');

//   const stringAMap = generateCharMap(cleanStringA);
//   const stringBMap = generateCharMap(cleanStringB);

//   if (cleanStringA.length !== cleanStringB.length) {
//     return false;
//   }

//   for (const char in stringAMap) {
//     if (stringAMap[char] !== stringBMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

function cleanString(str) {
  return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
