// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const positiveNumberString = String(Math.abs(n));
  const reversedNumber =
    Number(positiveNumberString.split('').reverse().join('')) * Math.sign(n);

  return reversedNumber;
}
// function reverseInt(n) {
//   if (n === 0) {
//     return 0;
//   }
//   const isNumberPositive = n > 0;
//   const positiveNumberString = String(n * (isNumberPositive ? 1 : -1));
//   const reversedNumber =
//     Number(positiveNumberString.split('').reverse().join('')) *
//     (isNumberPositive ? 1 : -1);

//   return reversedNumber;
// }

module.exports = reverseInt;
