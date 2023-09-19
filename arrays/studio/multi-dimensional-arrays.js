const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cabinet0 = food.split(",").sort();
cabinet1 = equipment.split(",").sort();
cabinet2 = pets.split(",").sort();
cabinet3 = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet0,cabinet1,cabinet2,cabinet3];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
userCabinet = Number(input.question("Please select a cabinet from 0 to 3: "));


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userCabinet == 0 || userCabinet == 1 || userCabinet == 2 || userCabinet == 3) {
    console.log(`You have selected: Cabinet ${userCabinet}.`);
    if (userCabinet == 0) {
        console.log(cargoHold[0]);
    }
    if (userCabinet == 1) {
        console.log(cargoHold[1]);
    }
    if (userCabinet == 2) {
        console.log(cargoHold[2]);
    }
    if (userCabinet == 3) {
        console.log(cargoHold[3]);
    }
} else {
    console.log("Error. Please enter a valid number 0-3.");
    userCabinet = input.question("Please select a cabinet from 0 to 3: ");
}

userItem = input.question("Now, please select an item: ");
if (cargoHold[userCabinet].includes(userItem)) {
    console.log(`Cabinet ${userCabinet} DOES contain ${userItem}.`);
} else {
    console.log(`Cabinet ${userCabinet} DOES NOT contain ${userItem}.`);
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
//Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
