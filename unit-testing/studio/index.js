
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    let str = "";

    if (num % 2 === 0) {
      str += "Launch"
    } 

    if (num % 3 === 0) {
      str += "Code";
    } 

    if (num % 5 === 0) {
      if (str.length > 0) {
        str += " ";
      }
      str += "Rocks";
    } 

    if (str.length === 0) {
      return "Rutabagas! That doesn't work."
    } else if (str === "Launch Rocks") {
      return str += " (CRASH!!!!)"
    } else {
      return str;
    }
  }
}

console.log(launchcode.launchOutput(10));

module.exports = launchcode;

