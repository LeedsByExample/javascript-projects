// launchcode.test.js code:
const launchcode = require('../index.js');

describe("testing launchcode", function() {

  //check that the value of organization is "nonprofit"
  test("should return 'nonprofit' for organization", function() {
    expect(launchcode.organization).toBe('nonprofit');
  });

  //check that the value of executiveDirector is "Jeff"
  test("should return 'Jeff' for executiveDirector", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  //check that the value of percentageCoolEmployees is 100
  test("should return 100 for percentageCoolEmployees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should return Web Development, Data Analysis, and Liftoff as values for programsOffered, and a length of 3", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });

  //When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'
  test("should return 'Launch!' when passed a number ONLY divisible by 2", function() {
    expect(launchOutput(2)).toBe('Launch!');
  });
});














// describe("Testing launchcode", function(){

//   // Write your unit tests here!
//   //write a test that will check that the value of organization is "nonprofit"
//   test("should return nonprofit for organization", function() {
//     expect(launchcode.organization).toBe("nonprofit");
//   });

//   //check that the value of executiveDirector is "Jeff"
//   test("should return Jeff for executiveDirector", function() {
//     expect(launchcode.executiveDirector).toBe("Jeff");
//   });

//   //check that the value of percentageCoolEmployees is 100
//   test("should return 100 for percentageCoolEmployees", function() {
//     expect(launchcode.percentageCoolEmployees).toBe(100);
//   });

//   //Three expects to check that the array contains the appropriate values, and one expect should check that the array is the appropriate size
//   test("should return Web Development, Data Analysis, and Liftoff as values for programsOffered, and a length of 3", function() {
//     expect(launchcode.programsOffered[0]).toBe("Web Development");
//     expect(launchcode.programsOffered[1]).toBe("Data Analysis");
//     expect(launchcode.programsOffered[2]).toBe("Liftoff");
//     expect(launchcode.programsOffered.length).toBe(3);
//   });

// });


