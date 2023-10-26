const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}


let hasVowel = function(word) {
  if (word.includes("a" || "e" || "i" || "o" || "u")) {
    return true;
  }
  return false;
};

console.log(getValidInput("Choose a word that contains a vowel: ", hasVowel));
// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
