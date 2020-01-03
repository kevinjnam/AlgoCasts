// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const vowelsList = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }

  for (let char of str) {
    let currentChar = char.toLowerCase();
    if (vowelsList[currentChar]) count += 1;
  }

  return count;
}

module.exports = vowels;
