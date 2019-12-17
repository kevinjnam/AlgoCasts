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
  let numStr = n.toString();
  if (n >= 0) {
    numStr = numStr.split('').reverse().join('');
    return Number(numStr);
  } else {
    numStr = numStr.slice(1);
    numStr = numStr.split('').reverse().join('');
    let num = Number(numStr);
    return num - (2 * num);
  }
}

module.exports = reverseInt;
