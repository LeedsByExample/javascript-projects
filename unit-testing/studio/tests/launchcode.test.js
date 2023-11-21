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

  //When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch'
  test("should return 'Launch' when passed a number ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe('Launch');
  });

  // When passed a number that is ONLY divisible by 3, return 'Code'
  test("should return 'Code' when passed a number ONLY divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toBe('Code');
  });
  // When passed a number that is ONLY divisible by 5, return 'Rocks'
  test("should return 'Rocks' when passed a number ONLY divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe('Rocks');
  })
  
  // When passed a number that is divisible by 2 AND 3, return 'LaunchCode
  test("should return 'LaunchCode' when passed a number divisible by 2 AND 3", function() {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode');
  })

  // When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
  test("should return 'Code Rocks' when passed a number divisible by 3 AND 5", function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks');
  })

  // When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
  test("should return 'Launch Rocks' when passed a number divisible by 2 AND 5", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks (CRASH!!!!)');
  })
  
  // When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
  test("should return 'LaunchCode Rocks' when passed a number divisible by 2, 3 AND 5", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks');
  })


  // When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
  test("should return 'Rutabagas! That doesn't work.' when passed a number NOT divisible by 2, 3, or 5", function() {
    expect(launchcode.launchOutput(67)).toBe("Rutabagas! That doesn't work.");
  })

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


