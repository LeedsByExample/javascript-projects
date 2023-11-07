let arr = ['Elocution', 21, 'Clean teeth', 100];

//Create an anonymous function and set it equal to a variable.

let tripleOrArrr = function(myVal) {
    if (typeof myVal === "number") {
        return myVal*3;
    } else if (typeof myVal === "string") {
        return "ARRR!";
    } else {
        return myVal;
    }
};

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

console.log(tripleOrArrr(18));

let map1 = arr.map(tripleOrArrr);

console.log(arr);
console.log(map1);


