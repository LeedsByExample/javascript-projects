let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	
	//TODO: 2. write the code required for this step
	protoArray1.includes(",");
	console.log(protoArray1.split(",").reverse().join());
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	
}
reverseCommas();

//3)
function semiDash() {
	let check;
	let output;
//TODO: write the code required for this step
	if (protoArray2.includes(";")) {
		console.log(protoArray2.split(";").sort().join("-"));
	} else {
		return;
	}
  
	return output;
}
semiDash();
//4)
function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step
	if (protoArray3.includes(' ')) {
		console.log(protoArray3.split(' ').sort().join(' '));
	} else {
		return;
	}
	return output;
}
reverseSpaces();
//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step
  if (protoArray4.includes(", ")) {
	console.log(protoArray4.split(", ").sort().join(", "));
  } else {
	return;
  }
	return output;
}
commaSpace();
// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
