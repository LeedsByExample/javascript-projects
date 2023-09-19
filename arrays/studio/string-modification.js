const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let str2 = str.slice(0,3);
let str3 = str.slice(3,str.length);
let finalString = (str3.concat('', str2));
console.log(finalString);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string was "${str}". The modified string is "${finalString}".`)
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
userInput = Number(input.question("How many letters would you like moved from the start of the word LaunchCode to the end? "));
if (userInput > str.length) {
    str2 = str.slice(0,3);
    str3 = str.slice(3,str.length);
    finalString = (str3 + str2);
    console.log(`You selected an invalid number. We have defaulted to moving 3 characters. The original string was ${str}. The modified string is ${finalString}`);
} else if (userInput < 0) {
    console.log("Invalid input. Select again.");
} else {
    str2 = str.slice(0,userInput);
    str3 = str.slice(userInput,str.length);
    finalString = (str3 + str2);
    console.log(`The original string was ${str}. The modified string is ${finalString}.`);
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. 
//Also, the template literal should note the error.


//Array.splice(start, removeCount, newItem, newItem, newItem, ...)

