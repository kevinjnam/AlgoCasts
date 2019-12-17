// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
  reverse('apple') === 'leppa'
  console.log(reverse('apple') === 'leppa');
  reverse('hello') === 'olleh'
  console.log(reverse('hello') === 'olleh');
  reverse('Greetings!') === '!sgniteerG'
  console.log(reverse('Greetings!') === '!sgniteerG');

  
function reverse(str) {
  return str.split('').reverse().join('')
}

module.exports = reverse;
