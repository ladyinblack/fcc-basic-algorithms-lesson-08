// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Truncate a String</h1>`;

/** TODO:
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).  Return the truncated string with `...` ending.
 * 
 
 function truncateString(str, num) {
   return str;
 }
 
 truncateString("A-tisket a-tasket A green and yellow basket", 8);
 */

function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num) + '...';
  }
  return str;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
console.log(truncateString('Peter Piper picked a peck of pickled peppers', 11));
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  )
);
console.log(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  )
);
console.log(truncateString('A-', 1));
console.log(truncateString('Absolutely Longer', 2));
