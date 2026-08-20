// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

function pyramid(n) {
  for (let i = n; i > 0; i--) {
    let step = '';

    const spaceWidth = i - 1;
    const hashWidth = (n - i + 1) * 2 - 1;
    step += ' '.repeat(spaceWidth);
    step += '#'.repeat(hashWidth);
    step += ' '.repeat(spaceWidth);

    console.log(step);
  }
}

module.exports = pyramid;
