let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); //makes the entire string into one entry in an array
console.log(str.split('')); //make each character in the string, including whitespace, into separate items in an array
console.log(str.split(' ')); //makes each word in the string into a separate item in an array
console.log(str.split('e')); //makes separate items in an array, removing 'e' and making the words before/after separate items
console.log(str);

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join()); //combines items into a string with commas and no whitespace
console.log(arr.join('')); //combines items into string with no commas and no whitespace
console.log(arr.join(' ')); //combines items into a string with whitespace but no commas
console.log(arr.join('a')); //combines items into a string with no whitespace and add's 'a' in between each item
console.log(arr);

//3) Do split or join change the original string/array?
//split and join do not change the original string/array

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(', '));