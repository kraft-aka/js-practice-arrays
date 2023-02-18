// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for
// the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or
// more than 2 occurrences of the character the function should return 0.

// subLength('Saturday', 'a'); // returns 6
// subLength('summer', 'm'); // returns 2
// subLength('digitize', 'i'); // returns 0
// subLength('cheesecake', 'k'); // returns 0

const subLength = (str, char) => {
  const first = str.indexOf(char);
  const second = str.lastIndexOf(char);
  let regexp = new RegExp(char, "gi");
  //console.log(str.match(regexp).length);
  const arrLengthOfChars = str.match(regexp);
  let substr = str.slice(first, second + 1);
  //console.log(substr);
  if (arrLengthOfChars.length <= 1 || arrLengthOfChars.length > 2) {
    return 0;
  } else {
    return substr.length;
  }
};
