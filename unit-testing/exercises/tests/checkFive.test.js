const checkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("Returns 'num is less than 5' when num < 5", function() {
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");
    });


    test("Returns 'num is greater than 5' when num > 5", function() {
        expect(checkFive(6)).toBe("6 is greater than 5.");
    });

    test("Returns 'num is equal to 5' when num = 5", function() {
        expect(checkFive(5)).toBe("5 is equal to 5.");
    });

});