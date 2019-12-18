// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;

  const cache = {};
  let newA = stringA.replace(/[^\w]/g, '').toLowerCase();
  let newB = stringB.replace(/[^\w]/g, '').toLowerCase();

  for (let char of newA) {
    cache[char] = cache[char] + 1 || 1;
  }

  for (let char of newB) {
    if (!cache[char] || cache[char] === 0) return false;
    cache[char] -= 1;
  }
  
  return true;
}

module.exports = anagrams;
