// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const cache = {};
  for (let char of str) {
    cache[char] = cache[char] + 1 || 1;
  }
  let max = -Infinity;
  let key;

  for (let keys in cache) {
    if (cache[keys] > max) {
      max = cache[keys];
      key = keys;
    } 
  }
  return key;
}

module.exports = maxChar;
