//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing. //need help with this one
// console.log(language.indexOf("J").indexOf("S"));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${language.slice(0,1)}${language.slice(4,5)}'`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(`${notTitleCase.slice(0,1).toUpperCase()}${notTitleCase.slice(1,6)}${notTitleCase.slice(6,7).toUpperCase()}${notTitleCase.slice(7)}`);